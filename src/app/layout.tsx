import './globals.css'
import { Toaster  } from 'sonner'

export const metadata = {
  title: 'Plasmá',
  description: 'Plasmá ofrece servicios extracciónn y procesamiento de Plasma Rico en Plaquetas (PRP) on demand para empresas y profesionales.',
  keywords: 'PRP, Plasma Rico en Plaquetas, servicio médico on demand',
  author: 'Plasmá',
  openGraph: {
    title: 'Plasmá - Plasma Rico en Plaquetas (PRP) On Demand',
    description: 'Servicios de PRP on demand para empresas. Innovación en salud y bienestar laboral.',
    type: 'website',
    url: '',
    image: 'https://images.unsplash.com/photo-1736325680518-397f54bd1086?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Añade una imagen relevante
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body>{children}
      <Toaster/>
      </body>
    </html>
  )
}
