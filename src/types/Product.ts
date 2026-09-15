import type { Category } from "./Category";

export type Product = {
    id: number,
    title: string,
    description: string,
    category: Category,
    price: number,
    rating: number,
    stock: number
    brand: string,
    sku: string,
    thumbnail: string,
    images: string[]
}