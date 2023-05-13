import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const Navigation = () => (
  <nav>
    <div className="flex pannel-bg">
      <ul className="flex">
        <li>
          <div className="Bookstore-CMS">
            <h1>Bookstore CMS</h1>
          </div>
        </li>
        <li>
          <div className="BOOKS">
            <Link to="./">
              <div>Books</div>
            </Link>
          </div>
        </li>
        <li>
          <div className="CATEGORIES">
            <Link to="./Categories">
              <div>Categories</div>
            </Link>
          </div>
        </li>
      </ul>
      <div className="account">
        <div className="user">
          <ImUser />
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;
