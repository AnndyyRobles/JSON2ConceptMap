import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JSON 2 ConceptMap',
  description: 'Create beautiful concept maps from JSON data',
  openGraph: {
    title: 'JSON 2 ConceptMap',
    description: 'Create beautiful concept maps from JSON data',
    images: [{
      url: 'https://json2conceptmap.netlify.app/logo.png',
      width: 500,
      height: 200,
      alt: 'JSON 2 ConceptMap Logo'
    }],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
