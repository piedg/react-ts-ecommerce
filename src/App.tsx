import './App.css'
import { HeroBanner } from './components/HeroBanner/HeroBanner'
import { ProductsCarousel } from './components/ProductsCarousel/ProductsCarousel'
import { ProductTile } from './components/ProductTile/ProductTile';
import { useProducts } from './hooks/products/useProducts';

function App() {
  const { allProducts } = useProducts();

  return (
    <div>
      <HeroBanner title='BAKERY ECOMMERCE' subTitle='Lorem ipsum lorem ipsum' />
      <ProductsCarousel products={allProducts} />
    </div>
  )
}

export default App
