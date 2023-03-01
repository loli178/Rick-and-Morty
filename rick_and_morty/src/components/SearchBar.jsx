import { useState } from 'react';
import styled from 'styled-components';

const Divbarra = styled.div`
  background: rgb(101, 29, 217);
  background: linear-gradient(90deg, rgba(101, 29, 217, 1) 0%, rgba(10, 2, 9, 1) 100%);
  margin: 20px;
  border: 3px solid #300b67;
  width: 99%;
  height: 55px;
`;
const BotonAgregar = styled.button`
  background-color: black;
  width: 100px;
  color: white;
  font-family: 'Times New Roman', Times, serif;
  font-size: 20px;
  margin: 10px;
  border-radius: 35px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(76, 35, 130, 1) 40%,
    rgba(0, 56, 255, 0.6278886554621849) 100%
  );
`;
const Input = styled.input`
  background-color: #060508;
  width: 25%;
  height: 25px;
  margin-top: 5px;
  color: white;
  border-radius: 25px;
`;
export default function SearchBar(props) {
  const [character, setCharacter] = useState();

  function HandleOnChange(event) {
    setCharacter(event.target.value);
  }

  return (
    <Divbarra>
      <Input type="search" onChange={HandleOnChange} />
      <BotonAgregar onClick={() => props.onSearch(character)}>Agregar</BotonAgregar>
    </Divbarra>
  );
}
