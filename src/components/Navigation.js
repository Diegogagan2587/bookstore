function Navigation() {
  return (
    <nav className="navigation">
      <span className="book-cms">Bookstore CMS</span>
      <ul>
        <li><a href="/" className="nav-text">BOOKS</a></li>
        <li><a href="/categories" className="nav-text">CATEGORIES</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
