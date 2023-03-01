import style from './App.module.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
// import characters, { Rick } from './data.js';
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Form from './components/Form';

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  console.log(location);
  // function onSearch() {
  //   const example = {
  //     name: 'Morty Smith',
  //     species: 'Human',
  //     gender: 'Male',
  //     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  //   };
  //   setCharacters([...characters, example]);
  // }
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then(response => response.json())
      .then(data => {
        if (data.name) {
          setCharacters(oldChars => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  function onClose(id) {
    setCharacters(oldCh => oldCh.filter(char => char.id !== id));
  }
  return (
    <div className={style.App}>
      {location.pathname === '/' ? null : <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={
            <div className={style.Container}>
              <Cards characters={characters} onClose={onClose} />
            </div>
          }
        />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
