import Card from './Card';
import Link from 'react-router-dom';

export default function Cards(props) {
  const { characters, onClose } = props;

  return (
    <>
      {characters.map(function (personaje) {
        return (
          <Card
            name={personaje.name}
            species={personaje.species}
            gender={personaje.gender}
            image={personaje.image}
            key={personaje.id + Math.random()}
            id={personaje.id}
            onClose={onClose}
          />
        );
      })}
    </>
  );
}
