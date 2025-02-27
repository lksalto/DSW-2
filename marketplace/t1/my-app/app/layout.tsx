import type React from "react"
import { ThemeProvider } from "@/components/providers/theme-provider"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="w-full flex flex-col font-mono bg-indigo-100 dark:bg-gray-900 dark:text-white min-h-screen">
        <ThemeProvider>
          <Header />
          <main className="flex-grow mt-14">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}