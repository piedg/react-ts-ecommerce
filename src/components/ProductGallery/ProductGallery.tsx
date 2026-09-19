import Slider from "react-slick"
import type { Product } from "../../types/Product"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ProductGalleryProps = {
    product: Product,
}

const sliderSettings = {
    slidesToShow: 1,
    infinite: true,
    centerMode: true,
}

export function ProductGallery({ product }: ProductGalleryProps) {
    return (
        <div>
            <Slider {...sliderSettings}>
                {product.images.map((imageUrl) =>
                    <img src={imageUrl} alt="" />
                )}
            </Slider>
        </div>
    )
}