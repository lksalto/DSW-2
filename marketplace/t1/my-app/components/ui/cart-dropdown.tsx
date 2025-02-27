"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import type { Disco } from "@/types"

export default function CartDropdown() {
  const [cartItems, setCartItems] = useState<Disco[]>([])

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("carrinho") || "[]")
    setCartItems(items)
  }, [])

  const finalizarCompra = () => {
    localStorage.removeItem("carrinho")
    setCartItems([])
    const cartCount = document.getElementById("cart-count")
    if (cartCount) {
      cartCount.textContent = "0"
    }
    alert("Compra finalizada com sucesso!")
  }

  return (
    <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-20">
      <div className="p-4">
        {cartItems.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">Seu carrinho está vazio.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="flex p-2 border-b border-gray-300 dark:border-gray-700">
              <div className="relative w-12 h-12 mr-2">
                <Image src={item.imagem || "/placeholder.svg"} alt={item.nome} fill className="object-cover rounded" />
              </div>
              <div>
                <h4 className="text-gray-800 dark:text-white font-bold">{item.nome}</h4>
                <p className="text-gray-600 dark:text-gray-400">R$ {Number.parseFloat(item.preco).toFixed(2)}</p>
              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <button
          onClick={finalizarCompra}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-b-lg"
        >
          Comprar
        </button>
      )}
    </div>
  )
}