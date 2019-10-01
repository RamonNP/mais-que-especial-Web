import React from 'react';

import './Header.css';
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="pos-f-t">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <h4 className="text-white"><Link to={'/AlunoList'}>Historico</Link></h4>
          <h4 className="text-white"><Link to={'/GameList'}>Jogos</Link></h4>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Procurar" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Procurar</button>
        </form>
        <img src="https://media.licdn.com/dms/image/C4E03AQHsPHiEshWRMw/avatar-displayphoto-shrink_200_200/0?e=1567036800&v=beta&t=nmAXH7POSCQT475FHtzMQz3ESfNiH6YpNmsNv8ZzT2A" className="user" alt="" id="user"></img>
      </nav>
    </div>
  );
}
