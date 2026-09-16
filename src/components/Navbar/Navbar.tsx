import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="flex row justify-center items-center h-15">
            <ul className="flex row w-full justify-evenly font-bold">
                <li>
                    <Link to="/">Home</Link>
                </li>
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
    )
}