import React from 'react';
import { NavLink } from 'react-router-dom';

import NavidationBarClass from './NavigationBar.css';

export default function NavigationBar() {
  return (
    <div className={NavidationBarClass.navigationBar}>
      <div className={NavidationBarClass.navigationBarInnerContainer}>
        <h1>Tour Of Heroes</h1>
        <nav className={NavidationBarClass.nav}>
          <NavLink exact to="/" activeClassName={NavidationBarClass.active}>Dashboard</NavLink>
          <NavLink exact to="/heroes" activeClassName={NavidationBarClass.active}>Heroes</NavLink>
        </nav>
      </div>
    </div>
  );
}

