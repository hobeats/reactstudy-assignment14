import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>{' '}
      {/* 닫는 태그 수정 */}
    </header>
  );
}

export default Header;
