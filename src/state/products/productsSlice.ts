import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/Product";
import type { DummyJSONResponse } from "../../types/DummyJsonResponse";
import type { Category } from "../../types/Category";

type AppState = {
    products: Product[],
    productsByCategory: Product[],
    product: Product | null
}

const initialState: AppState = {
    products: [],
    productsByCategory: [],
    product: null
}

type RenameProductParams = {
    productId: number,
    newTitle: string
}

export const getProductsAsync = createAsyncThunk(
    "products/getProducts",
    async () => {
        const response = await fetch('https://dummyjson.com/products')

        if (!response.ok) {
            throw new Error("Errore nel caricamento prodotti")
        }

        const data: DummyJSONResponse = await response.json()
        return data.products
    }
)

export const getProductsByCategoryAsync = createAsyncThunk(
    "products/getProductsByCategory",
    async (category: Category) => {
        const response = await fetch(`https://dummyjson.com/products/category/${category}`)

        if (!response.ok) {
            throw new Error("Errore nel caricamento prodotti dalla categoria")
        }

        const data: DummyJSONResponse = await response.json()
        return data.products
    }
)

export const getProductByIdAsync = createAsyncThunk(
    "products/getProductById",
    async (id: number) => {
        const response = await fetch(`https://dummyjson.com/products/${id}`)

        if (!response.ok) {
            throw new Error("Errore nel caricamento del prodotto")
        }

        const data: Product = await response.json()
        return data
    }

)

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        renameProduct: (state, action: PayloadAction<RenameProductParams>) => {
            const product = state.products.find((product) => product.id === action.payload.productId)

            if (product) {
                product.title = action.payload.newTitle
            }
        },
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProductsAsync.pending, () => {
            console.log("getProductsAsync.pending")
        }).addCase(getProductsAsync.fulfilled, (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload
        })

        builder.addCase(getProductsByCategoryAsync.pending, () => {
            console.log("getProductsByCategoryAsync.pending")
        }).addCase(getProductsByCategoryAsync.fulfilled, (state, action: PayloadAction<Product[]>) => {
            state.productsByCategory = action.payload
        })

        builder.addCase(getProductByIdAsync.pending, () => {
            console.log("getProductById.pending")
        }).addCase(getProductByIdAsync.fulfilled, (state, action: PayloadAction<Product>) => {
            console.log("action payload", action.payload)
            state.product = action.payload
        })
    }
})



export const { renameProduct, addProduct } = productsSlice.actions
export default productsSlice.reducer