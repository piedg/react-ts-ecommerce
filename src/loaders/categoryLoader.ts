import type { LoaderFunctionArgs } from "react-router-dom"
import type { DummyJSONResponse } from "../types/DummyJsonResponse"

export async function categoryLoader({ params }: LoaderFunctionArgs) {
    const response = await fetch(`https://dummyjson.com/products/category/${params.categoryName}`)

    if (!response.ok) {
        throw new Response("Categoria non trovata", { status: response.status })
    }

    const data: DummyJSONResponse = await response.json()
    return data.products
}