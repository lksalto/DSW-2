"use client"

import { useState, useEffect, type FormEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import { Mail, Key, User, Lock, Moon, Sun } from "lucide-react"

export default function RegisterPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDark)
    document.documentElement.classList.toggle("dark", isDark)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    document.documentElement.classList.toggle("dark", newDarkMode)
    localStorage.setItem("darkMode", newDarkMode.toString())
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const user = { name, email, password }; // Pegue os valores dos inputs
  
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Usuário cadastrado com sucesso!");
      } else {
        alert(data.error || "Erro ao cadastrar usuário.");
      }
    } catch (error) {
      alert("Erro ao conectar com o servidor.");
    }
  };
  

  return (
    <div className={`w-full h-dvh min-h-dvh flex items-center justify-center font-mono bg-indigo-100 md:bg-indigo-200 ${darkMode ? "dark" : ""}`}>
      <div className="fixed right-8 top-8 z-10">
        <div onClick={toggleDarkMode} className="select-none cursor-pointer text-black hover:text-indigo-700 dark:text-white dark:hover:text-yellow-300">
          {darkMode ? <Sun className="text-xs" /> : <Moon className="text-xs" />}
        </div>
      </div>

      <div className="w-full h-full bg-[url('/imagem_fundo_padrao.jpg')] bg-center bg-cover flex items-center justify-center dark:bg-gray-900">
        <div className="w-full h-full flex flex-col items-center justify-between gap-y-3 bg-indigo-100 dark:bg-gray-700 bg-white/80 dark:bg-gray-700/90 md:w-fit md:h-fit md:p-12 md:rounded-2xl">
          <div className="text-center flex flex-col items-center gap-y-4 p-4">
            <div className="w-24 h-24 relative">
              <Image src={darkMode ? "/logoDark.png" : "/logo.png"} alt="Logo" fill className="object-contain" />
            </div>
            <div className="text-xl font-bold text-indigo-800 dark:text-yellow-300">Crie sua conta</div>
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}

          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-y-8 p-8">
            <div className="w-full relative flex justify-end items-center md:w-80">
              <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" className="w-full text-xl rounded p-2 outline-0 bg-indigo-200 text-indigo-900 placeholder:text-indigo-700 focus:bg-indigo-300 dark:bg-gray-700 dark:text-yellow-200 dark:placeholder:text-yellow-400 dark:focus:bg-gray-600 md:text-base" />
              <User className="text-gray-500 dark:text-yellow-400 absolute mr-2" size={24} />
            </div>

            <div className="w-full relative flex justify-end items-center md:w-80">
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" className="w-full text-xl rounded p-2 outline-0 bg-indigo-200 text-indigo-900 placeholder:text-indigo-700 focus:bg-indigo-300 dark:bg-gray-700 dark:text-yellow-200 dark:placeholder:text-yellow-400 dark:focus:bg-gray-600 md:text-base" />
              <Mail className="text-gray-500 dark:text-yellow-400 absolute mr-2" size={24} />
            </div>

            <div className="w-full relative flex justify-end items-center md:w-80">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" className="w-full text-xl rounded p-2 outline-0 bg-indigo-200 text-indigo-900 placeholder:text-indigo-700 focus:bg-indigo-300 dark:bg-gray-700 dark:text-yellow-200 dark:placeholder:text-yellow-400 dark:focus:bg-gray-600 md:text-base" />
              <Key className="text-gray-500 dark:text-yellow-400 absolute mr-2" size={24} />
            </div>

            <div className="w-full relative flex justify-end items-center md:w-80">
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirmar Senha" className="w-full text-xl rounded p-2 outline-0 bg-indigo-200 text-indigo-900 placeholder:text-indigo-700 focus:bg-indigo-300 dark:bg-gray-700 dark:text-yellow-200 dark:placeholder:text-yellow-400 dark:focus:bg-gray-600 md:text-base" />
              <Lock className="text-gray-500 dark:text-yellow-400 absolute mr-2" size={24} />
            </div>

            <button type="submit" className="select-none text-base mt-6 rounded p-2 w-1/3 bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-500 dark:bg-yellow-400 dark:text-gray-800 dark:hover:bg-yellow-500 dark:active:bg-yellow-300 md:text-sm">
              Cadastrar
            </button>
          </form>

          <div className="w-full text-center text-sm select-none">
            <Link href="/login" className="hover:text-blue-700 dark:text-yellow-300 dark:hover:text-yellow-100">
              Já tem uma conta? Faça login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
