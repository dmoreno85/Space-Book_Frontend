import React from 'react';
import './header.scss'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Logout from '../logout/logout'
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
                <Logout />
            </React.Fragment>}



        </header>
    )
};
const mapStateToProps = ({users}) => ({
    user: users.user.user


});
export default connect(mapStateToProps)(Header);