import type { Metadata } from "next"
import "./globals.css"
import localFont from 'next/font/local'
import Providers from "@/components/Providers"
import MainLayout from "@/components/layout/MainLayout"
import Script from "next/script"

const myFont = localFont({
  src: './fonts/Montserrat-VariableFont_wght.ttf',
  display: 'swap',
})


export const metadata: Metadata = {
  title: {
    default: 'Upvisor',
    template: `%s | ${process.env.NEXT_PUBLIC_NAME}`
  },
  description: "Desarrollo de sitios webs.",
  twitter: {
    card: 'summary_large_image'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={myFont.className}>
      <head>
        <link rel="icon" href={process.env.NEXT_PUBLIC_FAVICON} />
      </head>
      <body className="overflow-x-hidden">
        <Providers>
          <MainLayout>
            <main>{children}</main>
          </MainLayout>
        </Providers>
      </body>
    </html>
  )
}
