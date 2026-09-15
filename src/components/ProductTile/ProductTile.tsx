import type { Product } from "../../types/Product"

type ProductTileProps = {
    product?: Product
}

export function ProductTile({ product }: ProductTileProps) {

    return (
        <div>
            <h4>{product?.title}</h4>
            <p>{product?.description}</p>
            <img src={product?.thumbnail} />
        </div>
    )
}