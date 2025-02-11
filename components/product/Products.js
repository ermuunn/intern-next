'use client'

import { PackageSearch } from "lucide-react"
import ProductCard from "./ProductCard"

export default function Products({ products }) {
  return (
    <div className="cont">
      <h1 className="text-2xl sm:text-3xl font-bold text-center gradient-text py-10">Бүтээгдэхүүнүүд</h1>
      <div className="pt-10 pb-40">
        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-2">
            <PackageSearch className="w-10 h-10 text-zinc-400" />
            <div className="text-sm text-zinc-600 leading-4">Бүтээгдэхүүн олдсонгүй</div>
          </div>
        )}
      </div>
    </div>
  )
}