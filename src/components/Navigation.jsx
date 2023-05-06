import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <div className="books flex">
      <div>
        <h1>Bookstore</h1>
      </div>
      <div className="menu flex">
        <Link to="./">
          <div>Books</div>
        </Link>
        <Link to="./Categories">
          <div>Categories</div>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navigation;
