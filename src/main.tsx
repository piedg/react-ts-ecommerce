import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import { ProductsProvider } from './context/ProductContext.tsx'
import { Homepage } from './pages/Homepage';
import { LandingPage } from './pages/LandingPage';
import { ErrorPage } from './pages/ErrorPage.tsx';
import { CategoryPage } from './pages/CategoryPage.tsx';
import { productsLoader } from './loaders/productsLoader.ts';
import { categoryLoader } from './loaders/categoryLoader.ts';
import { Provider } from 'react-redux';
import { store } from './state/store.ts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader: productsLoader,
        errorElement: <ErrorPage />
      },
      {
        path: "landing",
        element: <LandingPage />
      },
      {
        path: "category/:categoryName",
        element: <CategoryPage />,
        loader: categoryLoader
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ProductsProvider>
        <RouterProvider router={router} />
      </ProductsProvider>
    </Provider>
  </StrictMode>,
)
