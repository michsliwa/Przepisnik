import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({handleLogOut}) =>{
    return(
        <header className="header">
            <div className="logo">Przepiśnik</div>
            <nav className="header-nav">
                <ul className="header-nav-list">
                    <Link to="/"><li className="header-nav-list-item">Pulpit</li></Link>
                    <Link to="/przepisy"><li className="header-nav-list-item">Przepisy</li> </Link>
                    <Link to ="/plany"><li className="header-nav-list-item">Plany</li> </Link>
                </ul>
            </nav>
            <button className="header-logout-btn" onClick={handleLogOut}>Wyloguj</button>
        </header>
    )
}

 export default Header;