import { useLoaderData } from "react-router-dom";
import { HeroBanner } from "../components/HeroBanner/HeroBanner";
import { ProductsCarousel } from "../components/ProductsCarousel/ProductsCarousel";
import type { Product } from "../types/Product";
import { SectionContainer } from "../components/SectionContainer/SectionContainer";
import { useSelector } from "react-redux";
import type { RootState } from "../state/store";

export function Homepage() {
    const allProducts = useLoaderData() as Product[]

    const { products } = useSelector((state: RootState) => state.products)

    return (
        <>
            <HeroBanner title="EVERYTHING, EVERYWHERE, 
             ALL AT ONCE ECOMMERCE" subTitle="Lorem ipsum lorem ipsum" />
            <SectionContainer>
                <ProductsCarousel products={products} title="OUR BEAUTY PRODUCTS" category="beauty" />
            </SectionContainer>
            <SectionContainer>
                <ProductsCarousel products={allProducts} title="THE BEST FOOD" category={"groceries"} hasShowMore />
            </SectionContainer>
        </>
    )
}