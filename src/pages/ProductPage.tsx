import { useParams } from "react-router-dom";
import { ProductTile } from "../components/ProductTile/ProductTile";
import { useEffect } from "react";
import type { AppDispatch, RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";
import { getProductByIdAsync } from "../state/products/productsSlice";


export function ProductPage() {
    const { id } = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const { product } = useSelector((state: RootState) => state.products)

    console.log("productId", id)

    useEffect(() => {
        dispatch(getProductByIdAsync(Number(id)))
    }, [dispatch, id])

    return (
        <ProductTile product={product ?? { title: "placeholder", brand: "placeholder", category: "beauty", description: "placeholder", id: 0, images: [], price: 0, rating: 0, sku: "", stock: 0, thumbnail: "" }} />
    )
}