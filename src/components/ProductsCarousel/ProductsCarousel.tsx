import { useRef } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../types/Product";
import { ProductTile } from "../ProductTile/ProductTile";
import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import arrowLeftIcon from "../../assets/icons/left-arrow.png";
import arrowRightIcon from "../../assets/icons/right-arrow.png";
import type { Category } from "../../types/Category";

type ArrowProps = {
    action: () => void,
    alt?: string,
    icon?: string,
}

function CarouselArrow({ action, alt, icon }: ArrowProps) {
    return (
        <button
            onClick={action}
            className="text-black p-2 cursor-pointer"
        >
            <img src={icon} alt={alt} className="w-5 h-5" />
        </button>
    );
}

type ProductsCarouselProps = {
    products: Product[]
    category: Category
    title?: string
    hasShowMore?: boolean
}

export function ProductsCarousel({ products, category, title, hasShowMore = false }: ProductsCarouselProps) {
    const sliderRef = useRef<Slider>(null)
    const productsFiltered = products.filter((product) => product.category === category) // DA MIGLIORARE PER CROSS-CATEGORY
    const productsSliced = productsFiltered?.slice(0, 8) // PRODOTTI MAX DA MOSTRARE -> taglia la chiamata dal primo elemento fino a X

    const hasShowMoreBtn = hasShowMore ? "block" : "hidden"


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: false,
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
                    initialSlide: 0,
                    centerMode: false,
                    centerPadding: "0px",
                    dots: false,
                }
            }
        ]
    }

    return (
        <div className="relative">
            <div className="mb-5 h-10">
                <h3 className="text-2xl md:text-4xl lg:text-5xl">
                    <b>{title}</b>
                </h3>
                <div className="absolute md:top-0 right-0 flex items-center gap-3 z-10">
                    <CarouselArrow action={() => sliderRef.current?.slickPrev()} alt="Prev Arrow" icon={arrowLeftIcon} />
                    <CarouselArrow action={() => sliderRef.current?.slickNext()} alt="Next Arrow" icon={arrowRightIcon} />
                    <Link to={`/category/${category}`} className={`leading-none flex items-center ${hasShowMoreBtn}`}><b>Show More</b></Link>
                </div>
            </div>
            <div >
                <Slider ref={sliderRef} {...settings}>
                    {
                        productsSliced?.map((product) => (

                            <ProductTile key={product.id} product={product} />
                        ))
                    }
                </Slider>
            </div>

        </div>
    )
}