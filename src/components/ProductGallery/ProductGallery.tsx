import Slider from "react-slick"
import type { Product } from "../../types/Product"

type ProductGalleryProps = {
    product: Product,
}

const sliderSettings = {
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1
}

export function ProductGallery({ product }: ProductGalleryProps) {
    return (
        <div className="slider-container">
            <Slider {...sliderSettings}>

                {product.images.map((imageUrl) =>
                    <img src={imageUrl} alt="" />
                )}
            </Slider>

        </div>
    )
}