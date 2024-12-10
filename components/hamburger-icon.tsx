import React from 'react'
import { Menu, X } from 'lucide-react'

interface HamburgerMenuProps {
  isOpen: boolean
  toggleMenu: () => void
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? (
        <X className="h-6 w-6 text-gray-600" />
      ) : (
        <Menu className="h-6 w-6 text-gray-600" />
      )}
    </button>
  )
}

