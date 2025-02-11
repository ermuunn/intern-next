'use client'

import { formatDateLong, formatPrice } from "@/utils/util"
import { ChevronLeft } from "lucide-react"

export default function ProductDetail({ product }) {
  return (
    <div className="cont pt-10 pb-40">
      <a href="/products" className="text-zinc-600 hover:text-pink-600 flex items-center gap-1 text-sm">
        <ChevronLeft className="w-4 h-4" />
        Буцах
      </a>
      <h1 className="text-2xl sm:text-4xl font-bold text-center gradient-text pb-10">{product.name}</h1>
      <div className="flex flex-col items-center justify-center gap-6">
        <img className="w-96 h-96 rounded-md object-cover" src={product.image} alt={product.name} />
        <div className="text-lg text-zinc-600">{product.description}</div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
          <div className="flex flex-col gap-2 items-center">
            <div className="text-base text-zinc-600">Үнэ</div>
            <div className="text-xl font-bold text-pink-600">{formatPrice(product.price)}</div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="text-base text-zinc-600">Бэлэн тоо ширхэг</div>
            <div className="text-xl font-bold text-pink-600">{product.quantity}</div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="text-base text-zinc-600">Үүсгэсэн огноо</div>
            <div className="text-xl font-bold text-pink-600">{formatDateLong(product.createdAt)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}