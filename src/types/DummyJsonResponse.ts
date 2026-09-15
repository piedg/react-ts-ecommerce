import type { Product } from "./Product";

export type DummyJSONResponse = {
    products: Product[],
    total: number,
    skip: number,
    limit: number
}

export type DummyJSONProductResponse = {
    product: Product
}