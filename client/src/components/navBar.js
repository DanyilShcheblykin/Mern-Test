import React, { useContext } from "react";
import { Link , useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {

    const history = useNavigate ()

    const auth = useContext(AuthContext)

    const logOutHandler = (event)=>{
    event.preventDefault()
    auth.logout()
    history.push('/')
    }

  return (
    <nav>
      <div>
        <a href="/">
          Сокращение сылок
        </a>
        <ul id="nav-mobile">
          <li>
            <Link to="/create">Создать</Link>
          </li>
          <li>
            <Link to="/links">Ссылки</Link>
          </li>
          <li>
            <a href="/" onClick={logOutHandler}>Выйти</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar
