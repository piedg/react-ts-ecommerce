import { Link } from "react-router-dom"
import type { Product } from "../../types/Product"

type ProductTileProps = {
    product: Product
}

export function ProductTile({ product }: ProductTileProps) {

    return (
        <div className="m-1">
            <Link to={`/products/${product.id}`}>
                <div className="bg-orange-100 p-5 aspect-square flex items-center justify-center">
                    <img src={product?.thumbnail} className="w-full h-full object-contain" />
                </div>
                <p><b>{product?.title}</b></p>
                <p className="text-gray-400">{product?.price} €</p>
            </Link>
        </div>
    )
}