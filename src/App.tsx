import { Outlet } from 'react-router-dom';
import { NavHeader } from './components/NavHeader/NavHeader';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './state/store';
import { SectionContainer } from './components/SectionContainer/SectionContainer';
import { addProduct, renameProduct } from './state/products/productsSlice';
import { ProductsCarousel } from './components/ProductsCarousel/ProductsCarousel';


function App() {
  const products = useSelector((state: RootState) => state.products)
  const dispatch = useDispatch()

  console.log("Products", products)

  return (
    <>
      <NavHeader />
      <Navbar />
      <Outlet />
      <SectionContainer>
        <button onClick={() => dispatch(renameProduct({ productId: 10000, newTitle: "My New Fake product" }))}>Rename Product</button>
        <button onClick={() => dispatch(addProduct({
          id: 10000,
          title: "Fake Product " + 1,
          brand: "brand",
          category: "smartphones",
          description: "New description",
          images: [],
          price: 1,
          rating: 2,
          sku: "1233",
          stock: 99,
          thumbnail: ""
        }))}>Add Product</button>
      </SectionContainer>
      <SectionContainer>
        <ProductsCarousel products={products} category='smartphones' />
      </SectionContainer>
      {/*<SectionContainer>
        <ProductTile product={products[0]} />
      </SectionContainer> */}
      <Footer />
    </>
  )
}

export default App
