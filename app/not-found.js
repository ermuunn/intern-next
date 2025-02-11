import NotFound from "@/components/NotFound"

export const metadata = {
    title: "404 Хуудас олдсонгүй",
    description: "Уучлаарай, таны хайсан зүйл олдсонгүй."
}

export default async function NotFoundPage() {
    return <NotFound />
}