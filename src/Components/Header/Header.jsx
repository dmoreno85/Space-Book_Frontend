import React from 'react';
import './header.scss'
import { NavLink } from 'react-router-dom';
const Header = props => {
    return (
        <header className="header">

            <NavLink to="/home">
                {/* Nombre de usuario logueado  */}
                <span className="name">Nombre</span>
            </NavLink>
            <NavLink to="/addPost">
                {/* para Añadir un post nuevo  */}
                <span className="addPost">Add Post +</span>
            </NavLink>
            <NavLink to="/profile">
                {/* desplegable para perdil  */}
                <span className="profile">Perfil</span>
            </NavLink>

        </header>
    )
};

export default Header;