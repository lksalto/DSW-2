"use client"

import { useState, useEffect, type FormEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import { Mail, Key, User, Lock, Moon, Sun } from "lucide-react"

export default function RegisterPage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDark)

    if (isDark) {
        document.documentElement.classList.add("dark")
    } else {
        document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)

    if (newDarkMode) {
        document.documentElement.classList.add("dark")
    } else {
        document.documentElement.classList.remove("dark")
    }

    localStorage.setItem("darkMode", newDarkMode.toString())
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle registration logic here
  }

  return (
    <div
      className={`w-full h-dvh min-h-dvh flex items-center justify-center font-mono
                    bg-indigo-100 md:bg-indigo-200 ${darkMode ? "dark" : ""}`}
    >
      <div className="fixed right-8 top-8 z-10">
        <div
          onClick={toggleDarkMode}
          className="select-none cursor-pointer text-black hover:text-indigo-700 dark:text-white dark:hover:text-yellow-300"
        >
          {darkMode ? <Sun className="text-xs" /> : <Moon className="text-xs" />}
        </div>
      </div>

      <div
        className="w-full h-full bg-[url('/imagem_fundo_padrao.jpg')] bg-center 
          bg-cover flex items-center justify-center dark:bg-gray-900"
      >
        <div
          className="w-full h-full flex flex-col items-center justify-between
            gap-y-3 bg-indigo-100 dark:bg-gray-700 bg-white/80 dark:bg-gray-700/90
            md:w-fit md:h-fit md:p-12 md:rounded-2xl"
        >
          <div className="text-center flex flex-col items-center gap-y-4 p-4">
            {darkMode ? 
              <div className="w-24 h-24 relative">
                <Image src="/logoDark.png" alt="Logo Dark" fill className="object-contain" />
              </div>
             : 
              <div className="w-24 h-24 relative">
                <Image src="/logo.png" alt="Logo" fill className="object-contain" />
              </div>
            }
            <div className="text-xl font-bold text-indigo-800 dark:text-yellow-300">Crie sua conta</div>
          </div>

          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-y-8 p-8">
            {/* Name field */}
            <div className="w-full relative flex justify-end items-center md:w-80">
              <input
                placeholder="Nome"
                className="w-full text-xl rounded p-2 outline-0 bg-indigo-200 text-indigo-900
                  placeholder:text-indigo-700 focus:bg-indigo-300
                  dark:bg-gray-700 dark:text-yellow-200
                  dark:placeholder:text-yellow-400 dark:focus:bg-gray-600
                  md:text-base"
              />
              <User className="text-gray-500 dark:text-yellow-400 absolute mr-2" size={24} />
            </div>

            {/* Email field */}
            <div className="w-full relative flex justify-end items-center md:w-80">
              <input
                placeholder="E-mail"
                className="w-full text-xl rounded p-2 outline-0 bg-indigo-200 text-indigo-900
                  placeholder:text-indigo-700 focus:bg-indigo-300
                  dark:bg-gray-700 dark:text-yellow-200
                  dark:placeholder:text-yellow-400 dark:focus:bg-gray-600
                  md:text-base"
              />
              <Mail className="text-gray-500 dark:text-yellow-400 absolute mr-2" size={24} />
            </div>

            {/* Password field */}
            <div className="w-full relative flex justify-end items-center md:w-80">
              <input
                type="password"
                placeholder="Senha"
                className="w-full text-xl rounded p-2 outline-0 bg-indigo-200 text-indigo-900
                  placeholder:text-indigo-700 focus:bg-indigo-300
                  dark:bg-gray-700 dark:text-yellow-200
                  dark:placeholder:text-yellow-400 dark:focus:bg-gray-600
                  md:text-base"
              />
              <Key className="text-gray-500 dark:text-yellow-400 absolute mr-2" size={24} />
            </div>

            {/* Confirm Password field */}
            <div className="w-full relative flex justify-end items-center md:w-80">
              <input
                type="password"
                placeholder="Confirmar Senha"
                className="w-full text-xl rounded p-2 outline-0 bg-indigo-200 text-indigo-900
                  placeholder:text-indigo-700 focus:bg-indigo-300
                  dark:bg-gray-700 dark:text-yellow-200
                  dark:placeholder:text-yellow-400 dark:focus:bg-gray-600
                  md:text-base"
              />
              <Lock className="text-gray-500 dark:text-yellow-400 absolute mr-2" size={24} />
            </div>

            {/* Register button */}
            <button
              type="submit"
              className="select-none text-base mt-6 rounded p-2 w-1/3
                bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-500
                dark:bg-yellow-400 dark:text-gray-800 dark:hover:bg-yellow-500
                dark:active:bg-yellow-300 md:text-sm"
            >
              Cadastrar
            </button>
          </form>

          {/* Login link */}
          <div className="w-full text-center text-sm select-none">
            <Link
              href="/login"
              className="hover:text-blue-700 dark:text-yellow-300
                dark:hover:text-yellow-100"
            >
              Já tem uma conta? Faça login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}