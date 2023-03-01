import SearchBar from './SearchBar';
import style from './Nav.module.css';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  return (
    <div>
      <SearchBar onSearch={props.onSearch} />
      <Link to={'/about'}>
        <button className={style.button}>About</button>
      </Link>
      <Link to={'/home'}>
        <button className={style.button}>Home</button>
      </Link>
    </div>
  );
}
