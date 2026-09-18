import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/Product";

const initialState: Product[] =
    [{
        id: 999,
        title: "Fake Product",
        brand: "brand",
        category: "smartphones",
        description: "description",
        images: [],
        price: 1,
        rating: 1,
        sku: "123",
        stock: 1,
        thumbnail: ""
    }]

type RenameProductParams = {
    productId: number,
    newTitle: string
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        renameProduct: (state, action: PayloadAction<RenameProductParams>) => {
            const product = state.find((product) => product.id === action.payload.productId)

            if (product) {
                product.title = action.payload.newTitle
            }
        },
        addProduct: (state, action: PayloadAction<Product>) => {
            state.push({
                id: action.payload.id,
                title: action.payload.title,
                brand: action.payload.brand,
                category: action.payload.category,
                description: action.payload.description,
                images: action.payload.images,
                price: action.payload.price,
                rating: action.payload.rating,
                sku: action.payload.sku,
                stock: action.payload.stock,
                thumbnail: action.payload.thumbnail
            })
        }
    }
})

export const productAsync = createAsyncThunk(
    "product/productAsync",
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return amount
    }
)

export const { renameProduct, addProduct } = productsSlice.actions
export default productsSlice.reducer