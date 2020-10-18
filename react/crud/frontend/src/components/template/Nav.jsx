import './Nav.css';
import NavItem from './NavItem'
import React from 'react';

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem linkNav="/" itemIcon="home" itemName="Início" />
            <NavItem linkNav="/users" itemIcon="users" itemName="Usuários" />
        </nav>
    </aside>