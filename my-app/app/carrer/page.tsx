import { TimeLine } from "@/components/TimeLine"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Carreira'
}

const Carrer = () => {
  return (
    <section className="w-11/12 flex flex-col items-center justify-center mx-auto mt-16 mb-40">
      <h1 className="text-xl text-gray-500 font-light py-5">Linha do tempo</h1>
      <TimeLine/>
    </section>
  )
}

export default Carrer