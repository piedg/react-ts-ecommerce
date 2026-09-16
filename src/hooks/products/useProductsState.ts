import { useState, useEffect } from "react";
import type { Product } from "../../types/Product";
import type { DummyJSONResponse } from "../../types/DummyJsonResponse";

async function fetchAPI<T>(url: string, signal?: AbortSignal): Promise<T> {
    const response = await fetch(url, { signal })
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`)
    }

    return response.json()
}


export function useProductsState() {
    const [allProducts, setAllProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const controller = new AbortController() // annulla la richiesta se il componente viene smontato

        async function loadAllProducts() {
            try {
                setIsLoading(true)
                setError(null)

                const data = await fetchAPI<DummyJSONResponse>("https://dummyjson.com/products", controller.signal)
                setAllProducts(data.products)

            } catch (err: unknown) {
                if (err instanceof Error && err.name != "AbortError") {
                    setError(err.message)
                }
            } finally {
                setIsLoading(false)
            }
        }

        loadAllProducts()

        return () => controller.abort()
    }, [])


    return {
        allProducts,
        setAllProducts,
        isLoading,
        error
    }
}