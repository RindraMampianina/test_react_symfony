import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
    

const Navigation = () => {
    const navigate = useNavigate()
    return(
        <div className="navigation mb-5">
            <NavLink to="/">
                Acceuil
            </NavLink>

            {
                localStorage.getItem('token') ? 
                    <a className='navigation' onClick={() => {
                        localStorage.removeItem('token');
                        navigate(`/login`);
                    }}>
                        Se deconnecter
                    </a>
                :

                <div className="nav">
                    <NavLink to="/login">
                        Se connecter
                    </NavLink>

                    <NavLink to="/register">
                        S'inscrire
                    </NavLink>
                </div>
            }
            
        </div>
    )
}

export default Navigation;