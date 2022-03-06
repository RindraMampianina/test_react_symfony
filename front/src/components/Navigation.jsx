import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return(
        <div className="navigation">
            <NavLink to="/">
                Acceuil
            </NavLink>

            <NavLink to="/login">
                Se connecter
            </NavLink>

            <NavLink to="/register">
                S'inscrire
            </NavLink>
        </div>
    )
}

export default Navigation;