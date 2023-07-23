import Link from "next/link"

export const NavLinks = () => {
  return (
    <ul className="hidden items-center gap-5 md:flex">
       <li><Link href="/" className="hover:border-b-2 transition-all duration-500">Sobre</Link></li>
       <li><Link href="/carrer" className="">Carreira</Link></li>
       <li><Link href="/projects" className="">Projetos</Link></li>
       <li><Link href="/" className="">Blog</Link></li>
    </ul>
  )
}
