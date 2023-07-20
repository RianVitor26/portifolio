'use client'

import { FiMenu} from "react-icons/fi"
import { IoClose } from "react-icons/io5"
import { NavLinks } from "./NavLinks"
import Link from "next/link"
import { useState } from "react"

export const Navbar = () => {

  const [ isOpen, setIsOpen ] = useState(false)

  const toggleMenuIcon = () => {
      isOpen === false ? setIsOpen(true) : setIsOpen(false)
  }

  return (
    <nav className="w-full h-fit flex items-center justify-between px-10 py-3 gap-3">
        <div className="flex items-center gap-5 z-30 md:gap-10">
            <Link href="/" className="font-bold">RianVitor26</Link>
            <ul className="hidden md:flex gap-5"><NavLinks/></ul>
        </div>

        <div className="flex gap-5 items-center">
            <span onClick={toggleMenuIcon} className="md:hidden z-30">
                {isOpen ? <IoClose className="text-3xl"/> : <FiMenu className="text-3xl"/>}
            </span>
        </div>

        {isOpen ? <ul className="md:hidden w-full h-screen fixed top-0 left-0 z-20 bg-white flex flex-col items-start px-5 justify-center gap-10 font-bold transition-all duration-500">
          <NavLinks/>
        </ul> : null
        }
    </nav>
  )
}
