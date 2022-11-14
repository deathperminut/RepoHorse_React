import React from 'react';
import "./Header.css";
import Dropdown from 'react-bootstrap/Dropdown';


export default function Header() {
  return (
    <nav className="Navbar" id="Header">

        <Dropdown id="menuUser">
            <Dropdown.Toggle   id="dropdown-basic">
                        <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" class="rounded-circle"/>
            </Dropdown.Toggle>

            <Dropdown.Menu id="Menu">
                <Dropdown.Item href="#/action-1">Perfil</Dropdown.Item>
                <Dropdown.Item href="#/Landing">Cerrar Sesión</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </nav>
  )
}
