import Link from "next/link"
import { FaGithub, FaLinkedin, FaDiscord } from  "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi"

export const Footer = () => {

  const links = {
    contacts: {
      linkedin: 'https://www.linkedin.com/in/rian-vitor-dos-santos-de-almeida-a036aa202/',
      discord: 'https://discord.com/channels/@me',
      gmail: 'mailto:rianvitorlhe@gmail.com',
    },
    tech: {
      next: 'https://nextjs.org/',
      tailwind: 'https://tailwindcss.com/',
    },
    integrations: {
      vercel: 'https://vercel.com/',
      github: 'https://github.com/RianVitor26/',

    },
    project: {
      srcCode: 'https://github.com/RianVitor26/next-e-commerce/',
      license: 'https://github.com/RianVitor26/next-e-commerce/blob/main/LICENSE',
    },
    github: 'https://github.com/RianVitor26',
  }

  return (
    <footer className="max-w-4xl w-11/12 px-5 pt-5 mx-auto">
        <div className="w-full grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-5 mb-20 sm:grid-cols-3 sm:grid-rows-2  md:grid-cols-4 md:grid-rows-1">
            <div className="flex flex-col gap-3 h-fit">
                <span className="pb-4 font-bold text-gray-800">Contatos</span>
                <Link target="_blank" href={links.contacts.linkedin} className="text-gray-600">Linkedin</Link>
                <Link target="_blank" href={links.contacts.discord} className="text-gray-600 flex flex-col"><FaDiscord/>RianVitor26<span>#0458</span></Link>
                <Link target="_blank" href={links.contacts.gmail} className="text-gray-600">Gmail</Link>
            </div>

            <div className="flex flex-col gap-3 h-fit">
                <span className="pb-4 font-bold text-gray-800">Projeto</span>
                <Link target="_blank" href={links.project.srcCode} className="text-gray-600">Código fonte</Link>
                <Link target="_blank" href={links.project.license} className="text-gray-600">Lincença</Link>
            </div>

            <div className="flex flex-col gap-3 h-fit">
                <span className="pb-4 font-bold text-gray-800">Tecnologias</span>
                <Link target="_blank" href={links.tech.next} className="text-gray-600">Next.js</Link>
                <Link target="_blank" href={links.tech.tailwind} className="text-gray-600">TailwindCSS</Link>
            </div>

            <div className="flex flex-col gap-3 h-fit divide-x">
                <span className="pb-4 font-bold text-gray-800">Integrações</span>
                <Link target="_blank" href={links.integrations.vercel} className="text-gray-600">Vercel</Link>
                <Link target="_blank" href={links.integrations.github} className="text-gray-600">Github</Link>
            </div>
        </div>
        <div className="w-full h-fit flex items-center justify-center gap-5 mb-5 md:justify-start">
            <Link target="_blank" href={links.github} className="text-2xl text-gray-400 hover:-translate-y-1/3 hover:text-slate-800 transition-all duration-500"><FaGithub/></Link>
            <Link target="_blank" href={links.contacts.linkedin} className="text-2xl text-gray-400 hover:-translate-y-1/3 hover:text-blue-500 transition-all duration-500"><FaLinkedin/></Link>
            <Link target="_blank" href={links.contacts.gmail} className="text-2xl text-gray-400 hover:-translate-y-1/3 hover:text-red-500 transition-all duration-500"><BiLogoGmail/></Link>
            <Link target="_blank" href={links.contacts.discord} className="text-2xl text-gray-400 hover:-translate-y-1/3 hover:text-indigo-500 transition-all duration-500"><FaDiscord/></Link>
        </div>
        <div className="w-full">
              <p className="text-gray-400 text-center py-5">2023, Portifólio,  <Link target="_blank" href={links.github} className="hover:text-blue-600 transition-all duration-500">RianVitor26</Link></p>
        </div>
    </footer>
  )
}
