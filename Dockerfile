    # ========================================================
    # ETAPA 1: Mi entorno de compilación (Builder)
    # ========================================================
    FROM node:20-alpine AS builder
    WORKDIR /app

    # Instalo pnpm de forma global para poder manejar mis dependencias
    RUN npm install -g pnpm

    # Copio mis archivos de configuración para instalar los paquetes exactos
    COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* ./

    # Instalo todas mis dependencias bloqueando las versiones actuales
    RUN pnpm install --no-frozen-lockfile

    # Copio el resto de mi código fuente para empezar a compilar
    COPY . .

    # Ejecuto el build de Next.js para generar mi web de producción optimizada
    RUN pnpm run build

    # ========================================================
    # ETAPA 2: Mi entorno de ejecución real (Runner)
    # ========================================================
    FROM node:20-alpine AS runner   
    WORKDIR /app

    # Configuro mi entorno en modo producción para activar optimizaciones
    ENV NODE_ENV=production

    # Me traigo de la etapa anterior SOLO lo que necesito para que la web funcione
    COPY --from=builder /app/public ./public
    COPY --from=builder /app/.next ./.next
    COPY --from=builder /app/node_modules ./node_modules
    COPY --from=builder /app/package.json ./package.json

    # Dejo abierto el puerto de Next.js para poder conectarlo luego con Nginx
    EXPOSE 3000

    # Mi comando por defecto para arrancar mi portfolio en AWS
    CMD ["node_modules/.bin/next", "start"]