import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import style from './Detail.module.css';

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(char => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert('No hay personajes con ese iD');
        }
      })
      .catch(err => {
        window.alert(err);
      });

    return setCharacter({});
  }, [id]);
  console.log(character);
  return (
    <div className={style.container}>
      <button onClick={() => navigate('/home')}>Volver</button>
      <h1>Name: {character.name}</h1>
      <h3>Status: {character.status}</h3>
      <h3>Specie: {character.species}</h3>
      <h3>Gender: {character.gender}</h3>
      {/* <h3>Origin:{character.origin.name}</h3> */}
      <img src={character.image} alt="" />
    </div>
  );
}
