import { Skeleton } from "@/components/Skeleton";

export default function Loading() {
   
    return (
      <section className="w-11/12 mx-auto mt-20 grid gap-y-10 place-items-center lg:grid-cols-2 xl:grid-cols-3 xl:gap-20">
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
      </section>
    )
  }