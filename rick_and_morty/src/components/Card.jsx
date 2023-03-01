import { Link } from 'react-router-dom';
import style from './Card.module.css';

export default function Card(props) {
  return (
    <div className={style.container}>
      <button value={props.id} onClick={() => props.onClose(props.id)}>
        X
      </button>
      <Link to={`/detail/${props.id}`}>
        <h2>{props.name}</h2>
      </Link>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <img src={props.image} alt="" />
    </div>
  );
}
