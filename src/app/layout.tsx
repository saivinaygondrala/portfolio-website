import './globals.css'
import { Inter } from 'next/font/google'
import { portfolioConfig } from '@/config/portfolio'
import FaviconGenerator from '@/components/FaviconGenerator'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `Portfolio - ${portfolioConfig.personal.name}`,
  description: `${portfolioConfig.personal.title} Portfolio`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  animation: {
                    'fade-in': 'fadeIn 0.5s ease-in-out',
                    'slide-up': 'slideUp 0.5s ease-out',
                    'float': 'float 6s ease-in-out infinite',
                  },
                  keyframes: {
                    fadeIn: {
                      '0%': { opacity: '0' },
                      '100%': { opacity: '1' },
                    },
                    slideUp: {
                      '0%': { transform: 'translateY(20px)', opacity: '0' },  
                      '100%': { transform: 'translateY(0)', opacity: '1' },
                    },
                    float: {
                      '0%, 100%': { transform: 'translateY(0px)' },
                      '50%': { transform: 'translateY(-20px)' },
                    },
                  },
                }
              }
            }
          `
        }} />
      </head>
      <body className={inter.className}>
        <FaviconGenerator />
        {children}
      </body>
    </html>
  )
}