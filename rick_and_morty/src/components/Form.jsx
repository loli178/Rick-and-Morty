import style from './Form.module.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function validation(userData) {
  const errors = {};
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.username) || userData.username == '') {
    errors.username = 'El usuario  debe ser un correo electrónico valido, con menos de 35 caracteres';
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = 'El debe contener entre 6 y 10 caracteres';
  }
  console.log(userData.password.length);
  console.log(userData.password);
  return errors;
}

export default function Form() {
  const navigate = useNavigate();
  const [userData, setUserData] = React.useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({
    username: '',
    password: '',
  });

  function handleInputChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
      [e.target.password]: e.target.value,
    }); //entre braq para q tome el valor de la variable
    // console.log('soy userData' + userData);
    // console.log('soy userData.username' + userData.username);

    setErrors(
      validation({
        ...userData,
        [e.target.name]: e.target.value,
        [e.target.password]: e.target.value,
      }),
    );
    // console.log('soy errors ' + errors);
    // console.log('soy errors.username ' + errors.username);
  }

  function backToHome() {
    navigate('/home');
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      alert('Datos completos');
      backToHome();
      setUserData({
        username: '',
        password: '',
      });
      setErrors({
        username: '',
        password: '',
      });
    } else {
      alert('Debes corregir los errores');
    }
  }
  return (
    <div className={style.container}>
      <div>
        <img
          className={style.rickandmorty}
          src="https://vectorlogo4u.com/wp-content/uploads/2020/11/Rick-and-Morty-Logo-Vector-01-2048x967.png"
          alt="meteorito"
        />
        <img
          className={style.portal}
          src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png"
          alt="meteorito"
        />
        <img
          className={style.portalLila}
          src="https://www.pikpng.com/pngl/b/54-544830_free-roblox-particle-effect-png-download-clipart.png"
          alt="meteorito"
        />
      </div>
      <div className={style.divform}>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            // className={errors.name ? style.warning : null}
            className={errors.username && style.warning}
            type="text"
            name="username"
            placeholder="Coloca tu usuario"
            onChange={handleInputChange}
            value={userData.username}
          />
          <p className={style.danger}>{errors.username}</p>
          <br />
          <label>Password</label>
          <input
            className={errors.password && style.warning}
            type="password"
            name="password"
            onChange={handleInputChange}
            value={userData.password}
          />
          <p className={style.danger}>{errors.password}</p>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
