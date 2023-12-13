import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <span className="book-cms">Bookstore CMS</span>
      <ul>
        <li><Link to="/"><span className="nav-text">BOOKS</span></Link></li>
        <li><Link to="categories"><span className="nav-text">CATEGORIES</span></Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
