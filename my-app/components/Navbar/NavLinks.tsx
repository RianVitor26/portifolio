import Link from "next/link"

export const NavLinks = () => {
    const links = [{ name: 'Sobre mim', url: '/' }, { name: 'Carreira', url: '/carrer' }, { name: 'Projetos', url: '/projects' }, { name: 'Contatos', url: '/contacts' }]
    return (
        <>
        {links.map(link => {
                return (
                    <li key={link.name}><Link href={link.url} className="p-3 sm:p-0 text-gray-800 hover:text-blue-600 transition-all duration-500">{link.name}</Link></li>
                )
            })} 
        </>
    )
}
