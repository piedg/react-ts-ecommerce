import type { Product } from "../../types/Product";
import { ProductTile } from "../ProductTile/ProductTile";

type ProductsCarouselProps = {
    products?: Product[];
    title?: string,
}

export function ProductsCarousel({ products, title }: ProductsCarouselProps) {
    const productsSliced = products?.slice(0, 4)

    return (
        <div>
            <h3 className="text-5xl">
                {title}
            </h3>
            <div className="flex row flex-wrap justify-center content-center">
                {
                    productsSliced?.map((product) => (
                        <ProductTile key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}