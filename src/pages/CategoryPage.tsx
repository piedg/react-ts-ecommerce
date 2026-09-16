import { useLoaderData, useParams } from "react-router-dom"
import type { Product } from "../types/Product"
import { ProductsCarousel } from "../components/ProductsCarousel/ProductsCarousel"
import { capitalize } from "../utils/capitalize"
import { SectionContainer } from "../components/SectionContainer/SectionContainer"

export function CategoryPage() {
    const products = useLoaderData() as Product[]
    const { categoryName } = useParams()

    return (
        <div>
            <h1 className="text-4xl text-center">{capitalize(categoryName ?? "")}</h1>
            <SectionContainer>
                <ProductsCarousel products={products} />
            </SectionContainer>
        </div>
    )
}