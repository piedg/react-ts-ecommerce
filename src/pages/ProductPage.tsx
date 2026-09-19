import { useParams } from "react-router-dom";
import { useEffect } from "react";
import type { AppDispatch, RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";
import { getProductByIdAsync } from "../state/products/productsSlice";
import { ProductDetails } from "../components/ProductDetails/ProductDetails";
import { SectionContainer } from "../components/SectionContainer/SectionContainer";
import { ProductGallery } from "../components/ProductGallery/ProductGallery";


export function ProductPage() {
    const { id } = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const { product } = useSelector((state: RootState) => state.products)

    useEffect(() => {
        dispatch(getProductByIdAsync(Number(id)))
    }, [dispatch, id])

    if (!product) return <p>Caricamento...</p>

    return (
        <SectionContainer isFlexRow >
            <ProductGallery product={product} />
            <ProductDetails product={product} />
        </SectionContainer>
    )
}