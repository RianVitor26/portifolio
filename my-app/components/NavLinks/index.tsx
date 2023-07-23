import Link from "next/link"

export const NavLinks = () => {
  return (
    <ul className="hidden items-center gap-5 md:flex">
       <li><Link href="/" className="hover:text-blue-600 transition-all duration-500">Sobre</Link></li>
       <li><Link href="/carrer" className="hover:text-blue-600 transition-all duration-500">Carreira</Link></li>
       <li><Link href="/projects" className="hover:text-blue-600 transition-all duration-500">Projetos</Link></li>
       <li><Link target="_blank" href="/https://notion-blog-three-sable.vercel.app/" className="hover:text-blue-600 transition-all duration-500">Blog</Link></li>
    </ul>
  )
}
