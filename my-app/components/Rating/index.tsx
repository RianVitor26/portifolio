"use client"

import { Rating } from "@material-tailwind/react";


export const RatingStars = () => {
  return (
    <Rating value={5} readonly className="text-yellow-300"/>
  )
}
