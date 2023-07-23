import { ProjectCard } from "@/components/Card"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Projetos'
}

const Projects = () => {
  return (
    <section className="max-w-4xl w-11/12 mx-auto mt-20 grid gap-y-10 place-items-center grid-cols-1 lg:grid-cols-2">
      <ProjectCard imgSrc="/github.jfif" alt="Imagem da página inicial do Github" title="Github Repos" desc="Sistema de busca e filtro de repositórios usando a API do Github" srcCode="https://github.com/RianVitor26/react-repos" site="https://gbreposrv.vercel.app/"/>
      <ProjectCard imgSrc="/blog.jfif" alt="Imagem da página inicial de um blog" title="Blog API" desc="API REST de Blogs em geral, com as entidades e relacionamentos necessários" srcCode="https://github.com/RianVitor26/express-blog-api" site="https://github.com/RianVitor26/express-blog-api"/>
      <ProjectCard imgSrc="/crud.png" alt="Imagem representativa de um CRUD" title="React CRUD" desc="Sistema de cadastro de matérias com todas as operações CRUD(Create, Read, Update e Delete)" srcCode="https://github.com/RianVitor26/react-crud" site="https://react-crud-tawny.vercel.app/"/>
    </section>
  )
}

export default Projects