import ProductDetail from "@/components/product/ProductDetail"
import { notFound } from "next/navigation"
import axios from "axios"

export async function generateMetadata({ params }){
  const { id } = params
  if(!id) return
  const { data: product, error } = await axios.get(`${process.env.BACKEND_URL}/api/product/${id}`)
  if(error) return
  let data = { title: `${product.name} - Датаком ХХК` }
  if(product.description) data.description = product.description
  return data
}

export default async function ProductDetailPage({ params }){
  const { id } = params
  if(!id) return notFound()
  const { data: product, error } = await axios.get(`${process.env.BACKEND_URL}/api//product/${id}`)
  if(error) return notFound()
  return <ProductDetail product={product} />
}