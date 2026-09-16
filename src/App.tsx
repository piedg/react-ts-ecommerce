import { Link, Outlet } from 'react-router-dom';
import './App.css'


function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/category/smartphones">Smartphones</Link>
          </li>
          <li>
            <Link to="/category/beauty">Beauty</Link>
          </li>
          <li>
            <Link to="/category/groceries">Groceries</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer>Footer</footer>
    </>
  )
}

export default App
