import type { DummyJSONResponse } from "../types/DummyJsonResponse"

export async function productsLoader() {
    const response = await fetch('https://dummyjson.com/products')

    if (!response.ok) {
        throw new Response("Errore nel caricamento prodotti", { status: response.status })
    }

    const data: DummyJSONResponse = await response.json()
    return data.products
}