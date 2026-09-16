import type { Product } from "../../types/Product";

type ProductsCarouselProps = {
    products?: Product[];
    title?: string,
}

export function ProductsCarousel({ products, title }: ProductsCarouselProps) {

    console.log("products", products)
    return (
        <div >
            <h3>
                {title}
            </h3>
            <div className="flex row flex-wrap justify-center content-center">
                {
                    products?.map((product) => (
                        <div key={product.id} className="bg-amber-200 m-1">
                            <p>{product.title} <span>{product.price} €</span></p>
                            <img src={product.thumbnail} />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}