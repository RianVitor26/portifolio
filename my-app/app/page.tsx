import { RatingStars } from "@/components/Rating";


export default function About() {
  return (
   <div className="w-11/12 h-screen mx-auto flex flex-col sm:flex-row">
      <div className="w-full flex flex-col items-center pt-16 sm:w-1/2 sm:mt-20">
          <h1 className="text-black">Rian Vitor dos Santos de Almeida</h1>
          <h2 className="text-gray-500">Desenvolvedor Full-Stack</h2>
          <RatingStars/>
      </div>
      <div className="w-full bg-red-700 sm:1/2">
         dsadsasdasdsaddas
      </div>
   </div>
  )
}
