import { useParams } from "react-router-dom";
import { ProductDetails } from "../components/ProductDetails/ProductDetails";
import { SectionContainer } from "../components/SectionContainer/SectionContainer";
import { ProductGallery } from "../components/ProductGallery/ProductGallery";
import { useGetProductByIdQuery } from "../services/products";
import { ProductTile } from "../components/ProductTile/ProductTile";


export function ProductPage() {
    const { id } = useParams()
    const { data } = useGetProductByIdQuery(Number(id))

    if (!data) return <p>Caricamento...</p>

    return (
        <>
            <SectionContainer isFlexRow >
                <ProductGallery product={data} />
                <ProductDetails product={data} />
            </SectionContainer>
            <SectionContainer>
                <ProductTile product={data} />
            </SectionContainer>
        </>

    )
}