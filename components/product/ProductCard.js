'use client'

import { formatPrice } from "@/utils/util"

export default function ProductCard({ product }){
  return (
    <a href={`/product/${product._id}`} className="w-full p-3 flex flex-col">
      <div className="aspect-[16/9] relative">
        <img className="aspect-[16/9] rounded-md object-cover" src={product.image} alt={product.title} />
      </div>
      <div className="py-2 px-2 flex flex-col justify-between flex-1">
        <div className="mt-3">
          <h2 className="text-xl font-bold text-pink-600 leading-6">{product.name}</h2>
          <div className="text-sm text-zinc-600 mt-2 line-clamp-3 break-words">{product.description}</div>
        </div>
        <div className="mt-3 flex justify-between items-center">
          <div className="text-lg font-bold text-pink-600">{formatPrice(product.price)}</div>
          <div className="text-sm text-zinc-500">{product.quantity} ш үлд.</div>
        </div>
      </div>
    </a>
  )
}