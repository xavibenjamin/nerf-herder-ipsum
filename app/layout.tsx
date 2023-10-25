import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nerf Herder Ipsum',
  description: 'A Star Wars-themed lorem ipsum generator. Made with love by Xavi Benjamin.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`font-mono bg-slate-900 text-white`}>{children}</body>
    </html>
  )
}
