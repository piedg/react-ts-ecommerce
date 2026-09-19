import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { DummyJSONResponse } from "../types/DummyJsonResponse"
import type { Product } from "../types/Product"

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "products"
        })
        , getProductById: builder.query<Product, number>({
            query: (id) => `products/${id}`
        })
    })
})

export const { useGetProductByIdQuery } = productsApi


