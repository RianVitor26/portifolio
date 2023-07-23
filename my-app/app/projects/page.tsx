import { ProjectCard } from "@/components/Card"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Projetos'
}

const Projects = () => {
  return (
    <section className="max-w-4xl w-11/12 mx-auto mt-20 grid gap-y-10 place-items-center lg:grid-cols-2 xl:grid-cols-3 xl:gap-20">
      <ProjectCard imgSrc="/github.jpg" alt="Imagem da página inicial do Github" title="Github Repos" desc="Sistema de busca e filtro de repositórios usando a API do Github" srcCode="https://github.com/RianVitor26/react-repos" site="https://gbreposrv.vercel.app/"/>
      <ProjectCard imgSrc="/github.jpg" alt="Imagem da página inicial do Github" title="Github Repos" desc="Sistema de busca e filtro de repositórios usando a API do Github" srcCode="https://github.com/RianVitor26/react-repos" site="https://gbreposrv.vercel.app/"/>
      <ProjectCard imgSrc="/github.jpg" alt="Imagem da página inicial do Github" title="Github Repos" desc="Sistema de busca e filtro de repositórios usando a API do Github" srcCode="https://github.com/RianVitor26/react-repos" site="https://gbreposrv.vercel.app/"/>
    </section>
  )
}

export default Projects