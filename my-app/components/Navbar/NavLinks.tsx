import Link from "next/link"

export const NavLinks = () => {
    const links = [{ name: 'Sobre mim', url: '/' }, { name: 'Carreira', url: '/carrer' }, { name: 'Projetos', url: '/projects' }, { name: 'Contatos', url: '/contacts' }]
    return (
        <>
        {links.map(link => {
                return (
                    <li key={link.name}><Link href={link.url} className="p-3 sm:p-0 text-gray-800 hover:text-blue-600 transition-all duration-500 relative hover:before:content-[''] hover:before:w-full hover:before:absolute hover:before:h-1 hover:before:bg-blue-600 hover:before:bottom-0 hover:before:left-1/2 hover:before:-translate-x-2/4 hover:before:rounded-md before:transition-all before:duration-700 before:scale-0 hover:before:scale-100">{link.name}</Link></li>
                )
            })} 
        </>
    )
}
