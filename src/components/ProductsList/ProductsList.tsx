import type { Product } from "../../types/Product"
import { ProductTile } from "../ProductTile/ProductTile"

type ProductsListProps = {
    products: Product[],
    maxElement?: number
}

export function ProductsList({ products }: ProductsListProps) {
    return (
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 place-items-center">
            {
                products.map((product) =>
                    <ProductTile key={product.id} product={product} />
                )
            }
        </div>
    )
} 