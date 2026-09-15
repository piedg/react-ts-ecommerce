import { createContext, type ReactNode } from "react";
import { useProductsState } from "../hooks/products/useProductsState";

export const ProductsContext = createContext<ProductsContextProps | null>(null)

export type ProductsContextProps = ReturnType<typeof useProductsState>

export function ProductsProvider({ children }: { children: ReactNode }) {
    let products = useProductsState()

    return (
        <ProductsContext value={products}>
            {children}
        </ProductsContext>
    )
}