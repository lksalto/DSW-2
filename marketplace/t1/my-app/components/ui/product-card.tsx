"use client"

import Image from "next/image"
import type { Disco } from "@/lib/types"

interface ProductCardProps {
  disco: Disco
  onAddToCart: (disco: Disco) => void
}

export default function ProductCard({ disco, onAddToCart }: ProductCardProps) {
  const preco = Number.parseFloat(disco.preco)

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center p-4 relative">
      <div className="relative w-full h-40 rounded-t-lg overflow-hidden group">
        <Image src={disco.imagem || "/placeholder.svg"} alt={disco.nome} fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p>
            <strong>Nome:</strong> {disco.nome}
          </p>
          <p>
            <strong>Artista:</strong> {disco.artista}
          </p>
        </div>
      </div>
      <h3 className="mt-4 text-lg font-bold text-gray-800 dark:text-white">{disco.nome}</h3>
      <p className="text-green-600 dark:text-green-400 font-semibold mt-2">R$ {preco.toFixed(2)}</p>
      <button
        onClick={() => onAddToCart(disco)}
        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  )
}