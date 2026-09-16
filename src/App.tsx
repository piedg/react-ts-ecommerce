import { Outlet } from 'react-router-dom';
import { NavHeader } from './components/NavHeader/NavHeader';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

import './App.css'


function App() {

  return (
    <>
      <NavHeader />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
