import SearchBar from './SearchBar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Naveg = styled.div`
  border: 3px solid violet;
`;

export default function Nav(props) {
  return (
    <Naveg>
      <SearchBar onSearch={props.onSearch} />
      <Link to={'/about'}>
        <button>About</button>
      </Link>
      <Link to={'/home'}>
        <button>Home</button>
      </Link>
    </Naveg>
  );
}
