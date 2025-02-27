"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ShoppingCart, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/providers/theme-provider"
import CartDropdown from "@/components/ui/cart-dropdown"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="fixed top-0 left-0 w-full h-14 p-4 flex flex-row justify-between bg-indigo-200 border-b border-b-gray-300 dark:bg-gray-900 dark:border-b-gray-800 z-10">
      <div className="flex flex-row items-center gap-x-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center select-none cursor-pointer text-gray-500 hover:text-indigo-700 active:text-red-500 dark:hover:text-indigo-400 dark:active:text-red-500"
        >
          <Menu />
        </button>

        <Link href="/" className="font-bold text-2xl cursor-pointer select-none text-indigo-600 dark:text-yellow-300">
          Toca Do Disco
        </Link>

        {menuOpen && (
          <div className="fixed top-14 left-0 w-full z-10 flex flex-col p-8 gap-y-2 text-lg font-bold bg-gray-200 dark:bg-gray-900">
            <Link
              href="/"
              className="p-2 cursor-pointer select-none hover:text-indigo-700 dark:hover:text-indigo-300"
              onClick={() => setMenuOpen(false)}
            >
              Página Inicial
            </Link>
            <Link
              href="/login"
              className="p-2 cursor-pointer select-none hover:text-indigo-700 dark:hover:text-indigo-300"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/cadastro"
              className="p-2 cursor-pointer select-none hover:text-indigo-700 dark:hover:text-indigo-300"
              onClick={() => setMenuOpen(false)}
            >
              Cadastro
            </Link>
          </div>
        )}
      </div>

      <div className="flex flex-row gap-x-2">
        <div className="relative">
          <button
            onClick={() => setCartOpen(!cartOpen)}
            className="flex items-center cursor-pointer select-none text-black hover:text-yellow-500 dark:text-white"
          >
            <ShoppingCart />
            <span id="cart-count" className="ml-2 text-sm text-red-500">
              0
            </span>
          </button>
          {cartOpen && <CartDropdown onClose={() => setCartOpen(false)} />}
        </div>

        <button
          onClick={toggleTheme}
          className="select-none cursor-pointer text-black hover:text-yellow-500 dark:text-white"
        >
          {theme === "dark" ? <Sun className="text-xs" /> : <Moon className="text-xs" />}
        </button>
      </div>
    </header>
  )
}