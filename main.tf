terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# Mi config para conectarme a AWS Paris
provider "aws" {
  region = "eu-west-3"
}

# Aquí creo el clúster lógico para los contenedores
resource "aws_ecs_cluster" "portfolio_cluster" {
  name = "portfolio-cluster-tf"

  setting {
    name  = "containerInsights"
    value = "disabled" # Lo apago para que no me cobren métricas extras
  }
}

# Mis subredes publicas de AWS Paris que ya tengo creadas
variable "mis_subredes" {
  type    = list(string)
  default = [
    "subnet-0c8845f6a58a9476c",
    "subnet-070b8d4b9188b8aca",
    "subnet-0454f6e7bcde0d01e"
  ]
}

# Le pido a Terraform que busque mi VPC por defecto en París
data "aws_vpc" "default" {
  default = true
}

# Mi grupo de seguridad personalizado para abrir los puertos
resource "aws_security_group" "portfolio_sg" {
  name        = "portfolio-web-sg"
  description = "Reglas de seguridad para mi portfolio web"
  vpc_id      = data.aws_vpc.default.id 

  # Puerto HTTP estandar
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] 
  }

  # Puerto HTTPS seguro 🎯
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Puerto de mi contenedor Node/Next.js
  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Tráfico saliente permitido
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1" 
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# 🛠️ Creamos el grupo de logs aquí para solucionar el AccessDenied de Fargate
resource "aws_cloudwatch_log_group" "ecs_log_group" {
  name              = "/ecs/portfolio-task"
  retention_in_days = 7 
}

# Defino la tarea de Fargate con la receta de mi contenedor
resource "aws_ecs_task_definition" "portfolio_task" {
  family                   = "portfolio-task"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "256"
  memory                   = "512"
  execution_role_arn       = "arn:aws:iam::221082183005:role/ecsTaskExecutionRole"

  # Parche de arquitectura para evitar el Exec format error 🎯
  runtime_platform {
    operating_system_family = "LINUX"
    cpu_architecture       = "X86_64"
  }

  container_definitions = jsonencode([{
    name      = "portfolio-container"
    image     = "221082183005.dkr.ecr.eu-west-3.amazonaws.com/portfolio-web:latest"
    essential = true
    portMappings = [
  {
    containerPort = 3000
    hostPort      = 3000
    protocol      = "tcp"
  }
]

    # 🎯 PARCHE DE RED: Forzamos a Next.js a escuchar en la interfaz abierta de AWS
    environment = [
      { name = "HOSTNAME", value = "0.0.0.0" },
      { name = "PORT",     value = "3000" }
    ]

    logConfiguration = {
      logDriver = "awslogs"
      options = {
        "awslogs-group"         = "/ecs/portfolio-task"
        "awslogs-region"        = "eu-west-3"
        "awslogs-stream-prefix" = "ecs"
      }
    }
  }])
}

# El motor que mantiene vivo el contenedor 24/7
resource "aws_ecs_service" "portfolio_service" {
  name            = "portfolio-service-tf"
  cluster         = aws_ecs_cluster.portfolio_cluster.id
  task_definition = aws_ecs_task_definition.portfolio_task.arn
  desired_count   = 1 
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = var.mis_subredes
    security_groups  = [aws_security_group.portfolio_sg.id]
    assign_public_ip = true 
  }
}