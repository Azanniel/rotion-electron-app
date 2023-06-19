import { useState } from 'react'
import { MagnifyingGlass } from 'phosphor-react'
import { SearchBar } from '../SearchBar'

export function Search() {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)

  function handleOpenChange(isOpen: boolean) {
    setIsSearchBarOpen(isOpen)
  }

  return (
    <>
      <button
        onClick={() => handleOpenChange(true)}
        className="text-rotion-100 hover:text-rotion-50 mx-5 flex items-center gap-2 text-sm"
      >
        <MagnifyingGlass className="h-5 w-5" />
        Busca rápida
      </button>

      <SearchBar open={isSearchBarOpen} onOpenChange={handleOpenChange} />
    </>
  )
}
