import { useLoaderData, useParams } from "react-router-dom"
import type { Product } from "../types/Product"
import { ProductsCarousel } from "../components/ProductsCarousel/ProductsCarousel"
import { capitalize } from "../utils/capitalize"

export function CategoryPage() {
    const products = useLoaderData() as Product[]
    const { categoryName } = useParams()

    return (
        <div>
            <h1 className="text-4xl">{capitalize(categoryName ?? "")}</h1>
            <ProductsCarousel products={products} />
        </div>
    )
}