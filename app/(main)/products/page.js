import Products from "@/components/product/Products"
import { notFound } from "next/navigation"
import axios from "axios"

const title = "Бүтээгдэхүүнүүд - Датаком ХХК"
const description = "Датаком ХХК-д харгалзах бүтээгдэхүүнүүд"

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL),
  title: title,
  description: description,
  openGraph: {
      title: title,
      description: description,
  },
  twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
  },
}

export default async function ProductsPage(){
  const { data: products, error } = await axios.get(`${process.env.BACKEND_URL}/api/products`)
  if(error) return notFound()
  return <Products products={products} />
}