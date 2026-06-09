import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google' // Asegúrate de tener la versión actualizada de Next.js
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Configuración de fuentes correctas
const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'DevOps Engineer Portfolio | Cloud & Infrastructure',
  description: 'Junior Cloud & DevOps Engineer specializing in AWS, Docker, Kubernetes, Terraform, and CI/CD pipelines. Building reliable cloud infrastructure.',
  keywords: ['DevOps', 'Cloud Engineer', 'AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD', 'Infrastructure'],
  authors: [{ name: 'DevOps Engineer' }],
  openGraph: {
    title: 'DevOps Engineer Portfolio',
    description: 'Building reliable cloud infrastructure with AWS, Docker, Kubernetes, and more.',
    type: 'website',
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}