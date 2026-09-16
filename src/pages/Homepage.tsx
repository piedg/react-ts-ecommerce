import { useLoaderData } from "react-router-dom";
import { HeroBanner } from "../components/HeroBanner/HeroBanner";
import { ProductsCarousel } from "../components/ProductsCarousel/ProductsCarousel";
import type { Product } from "../types/Product";

export function Homepage() {
    const allProducts = useLoaderData() as Product[]
    return (
        <>
            <HeroBanner title='BAKERY ECOMMERCE' subTitle='Lorem ipsum lorem ipsum' />
            <section className="mx-20">
                <ProductsCarousel products={allProducts} title="OUR BEAUTY PRODUCTS" />
            </section>
        </>
    )
}