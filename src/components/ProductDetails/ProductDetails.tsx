import type { Product } from "../../types/Product"

type ProductDetailsProps = {
    product: Product,
}

export function ProductDetails({ product }: ProductDetailsProps) {
    return (

        <div>
            <p className="text-4xl mb-5"><b>{product.title}</b></p>
            <p>Brand: {product.brand}</p>
            <p>Rating: <span className="text-2xl">{product.rating}</span></p>
            <p className="text-2xl"><b>{product.price} €</b></p>
            <p>{product.description}</p>
        </div>

    )
}