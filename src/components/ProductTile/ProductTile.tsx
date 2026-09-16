import type { Product } from "../../types/Product"

type ProductTileProps = {
    product?: Product
}

export function ProductTile({ product }: ProductTileProps) {

    return (
        <div className="m-1 md:w-75 lg:150">
            <div className="bg-orange-100 p-5">
                <img src={product?.thumbnail} />
            </div>
            <p><b>{product?.title}</b></p>
            <p className="text-gray-400">{product?.price} €</p>
        </div>
    )
}