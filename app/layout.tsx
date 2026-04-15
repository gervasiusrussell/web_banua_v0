import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Banua Scholarship Launchpad | Persiapan Beasiswa Luar Negeri',
  description: 'Program bimbingan beasiswa komprehensif untuk S2 luar negeri. Persiapan LPDP, Chevening, MEXT, AAS dengan mentor awardee berpengalaman dari Kalimantan.',
  generator: 'English Banua',
  icons: {
    icon: [
      {
        url: '/ENGLISH BANUA LOGO WHITE.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/ENGLISH BANUA LOGO.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/ENGLISH BANUA LOGO.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/ENGLISH BANUA LOGO.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${plusJakarta.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
