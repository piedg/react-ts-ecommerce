import { useLoaderData } from "react-router-dom";
import { HeroBanner } from "../components/HeroBanner/HeroBanner";
import { ProductsCarousel } from "../components/ProductsCarousel/ProductsCarousel";
import type { Product } from "../types/Product";
import { SectionContainer } from "../components/SectionContainer/SectionContainer";

export function Homepage() {
    const allProducts = useLoaderData() as Product[]
    return (
        <>
            <HeroBanner title="EVERYTHING, EVERYWHERE, 
             ALL AT ONCE ECOMMERCE" subTitle="Lorem ipsum lorem ipsum" />
            <SectionContainer>
                <ProductsCarousel products={allProducts} title="OUR BEAUTY PRODUCTS" category={"beauty"} />
            </SectionContainer>
            <SectionContainer>
                <ProductsCarousel products={allProducts} title="THE BEST FOOD" category={"groceries"} />
            </SectionContainer>
        </>
    )
}