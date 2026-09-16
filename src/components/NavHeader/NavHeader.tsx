export function NavHeader() {
    return (
        <div className="flex row border-b-2 border-gray-600 justify-between items-center px-20 h-20">
            <input placeholder="Search" />
            <p>LOGO BRAND NAME</p>
            <div>
                <ul className="flex row gap-5">
                    <li>Favorites</li>
                    <li>Login</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}