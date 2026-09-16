import type { Product } from "../../types/Product";
import { ProductTile } from "../ProductTile/ProductTile";
import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ProductsCarouselProps = {
    products?: Product[];
    title?: string,
}

function NextArrow(props: any) {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white rounded-full p-2"
        >
            →
        </button>
    );
}

function PrevArrow(props: any) {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white rounded-full p-2"
        >
            ←
        </button>
    );
}

export function ProductsCarousel({ products, title }: ProductsCarouselProps) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            }
        ]
    }

    const productsSliced = products?.slice(0, 8)

    return (
        <div>
            <h3 className="text-5xl">
                {title}
            </h3>
            <Slider {...settings}>
                {
                    productsSliced?.map((product) => (

                        <ProductTile key={product.id} product={product} />
                    ))
                }
            </Slider>


            <div className="flex row flex-wrap justify-center content-center">
            </div>
        </div>
    )
}