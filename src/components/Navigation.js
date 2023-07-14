function Navigation() {
    return (
        <nav className="Navigation">
            <span>Bookstore CMS</span>
            <ul>
                <li><a href={`/`}>BOOKS</a></li>
                <li><a href={`/categories`}>CATEGORIES</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;