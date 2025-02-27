"use client"

import type { Disco } from "@/lib/types"

interface GenreFilterProps {
  discos: Disco[]
  onFilterChange: (genre: string) => void
}

export default function GenreFilter({ discos, onFilterChange }: GenreFilterProps) {
  const genres = Array.from(new Set(discos.map((disco) => disco.genero)))

  return (
    <div className="w-full p-4 flex justify-center items-center gap-4 bg-indigo-300 dark:bg-gray-800">
      <label htmlFor="generoFiltro" className="text-indigo-800 dark:text-yellow-300">
        Filtrar por gênero:
      </label>
      <select
        id="generoFiltro"
        onChange={(e) => onFilterChange(e.target.value)}
        className="p-2 bg-gray-200 dark:bg-gray-600 rounded-lg"
      >
        <option value="all">Todos</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre.charAt(0).toUpperCase() + genre.slice(1)}
          </option>
        ))}
      </select>
    </div>
  )
}