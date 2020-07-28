import React from 'react';
import Logo from '../../Components/Menu/Logo.png';
import './Menu.css'
import Button from '../Button/Button'

function Menu () {
    return (
        <nav>
            <a href="/">
            <img className="Logo" src={Logo} alt="Intrinsic Play logo"></img>
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo!
            </Button>
        </nav>
    );
}

export default Menu;