import React from 'react';
import './header.scss'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
const Header = ({ user }) => {

    return (
        < header className="header">
            {user && <React.Fragment>
                <NavLink to="/home">
                    {/* Nombre de usuario logueado  */}
                    <span className="name">{user.name} </span>
                </NavLink>
                <NavLink to="/addPost">
                    {/* para Añadir un post nuevo  */}
                    <span className="addPost">Add Post +</span>
                </NavLink>
                <NavLink to="/profile">
                    {/* desplegable para perdil  */}
                    <span className="profile">Perfil</span>
                </NavLink>
            </React.Fragment>}


        </header>
    )
};
const mapStateToProps = state => ({
    user: state.users.user

});
export default connect(mapStateToProps)(Header);