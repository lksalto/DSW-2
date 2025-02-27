"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import ProductCard from "@/components/ui/product-card"
import GenreFilter from "@/components/ui/genre-filter"
import type { Disco } from "@/lib/types"

export default function HomePage() {
  const [discos, setDiscos] = useState<Disco[]>([])
  const [filteredDiscos, setFilteredDiscos] = useState<Disco[]>([])

  useEffect(() => {
    fetchDiscos()
  }, [])

  const fetchDiscos = async () => {
    try {
      const response = await fetch("http://localhost:3000/discos")
      const data = await response.json()
      setDiscos(data)
      setFilteredDiscos(data)
    } catch (error) {
      console.error("Erro ao carregar discos:", error)
      alert("Erro ao carregar discos. Verifique se o JSON Server está rodando.")
    }
  }

  const handleGenreFilter = (genre: string) => {
    if (genre === "all") {
      setFilteredDiscos(discos)
    } else {
      setFilteredDiscos(discos.filter((disco) => disco.genero === genre))
    }
  }

  const addToCart = (disco: Disco) => {
    const carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]")
    carrinho.push(disco)
    localStorage.setItem("carrinho", JSON.stringify(carrinho))

    // Update cart count
    const cartCount = document.getElementById("cart-count")
    if (cartCount) {
      cartCount.textContent = carrinho.length.toString()
    }
  }

  return (
    <>
      {/* Banner */}
      <div className="w-full">
        <div className="relative w-full h-64">
          <Image src="/banner.jpg" alt="Banner da Toca do Disco" fill className="object-cover" priority />
        </div>
      </div>

      {/* Genre Filter */}
      <GenreFilter discos={discos} onFilterChange={handleGenreFilter} />

      {/* Products Grid */}
      <div className="flex-col p-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredDiscos.map((disco) => (
            <ProductCard key={disco.id} disco={disco} onAddToCart={addToCart} />
          ))}
        </div>
      </div>
    </>
  )
}