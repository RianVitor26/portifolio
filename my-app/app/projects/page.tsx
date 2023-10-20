import { ProjectCard } from "@/components/Card"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Projetos'
}

const Projects = () => {
  return (
    <section className="max-w-4xl w-11/12 mx-auto mt-20 grid gap-y-10 place-items-center grid-cols-1 lg:grid-cols-2">
      <ProjectCard imgSrc="/flashcards2.jpg" 
      alt="Imagem de cartões em branco" 
      title="Flash Cards Front end" 
      desc="Front end do sistema de memorização de termos em inglês através de aprendizado espaçado com cartôes" 
      srcCode="https://github.com/RianVitor26/flash-cards" 
      site="https://github.com/RianVitor26/flash-cards"/>

      <ProjectCard imgSrc="/flashcards.jpg" 
      alt="Imagem de cartões em branco" 
      title="Flash Cards API" 
      desc="API REST para o sistema de memorização de termos em inglês através de aprendizado espaçado com cartôes" 
      srcCode="https://github.com/RianVitor26/flash-cards-api" 
      site="https://github.com/RianVitor26/flash-cards-api"/>
      
      <ProjectCard imgSrc="/github.jpg" 
      alt="Imagem do mascote do Github" 
      title="Github Repos" 
      desc="Sistema de busca e filtro de repositórios usando a API do Github" 
      srcCode="https://github.com/RianVitor26/next-repos" 
      site="https://github-repositories-tau.vercel.app/"/>
      
      <ProjectCard imgSrc="/blog.jpg" 
      alt="Imagem da página inicial de um blog" 
      title="Blog API" 
      desc="API REST para o meu blog pessoal" 
      srcCode="https://github.com/RianVitor26/blog-api" 
      site="https://github.com/RianVitor26/blog-api"/>
    </section>
  )
}

export default Projects