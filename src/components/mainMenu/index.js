import React from "react";
import { Outlet } from "react-router-dom";
import {AddToCartButton} from '../addToCartButton';
import {NavLink, useNavigate} from 'react-router-dom';
import styles from './index.module.css';

export const MainMenu = () => {
  const navigate = useNavigate

  const activeClassName = ({isActive}) => isActive ? styles.activeRoute: styles.route

  return (
    <>
      <nav className={styles.wrapper}>
        <p className={styles.userName}>USER NAME</p>
        <NavLink  to='/login' className={activeClassName}>logout</NavLink>
        <NavLink to='/contacts' className={activeClassName}>contacts</NavLink>
        <NavLink to='/' className={activeClassName}>shop</NavLink>
        <AddToCartButton size="s"/>
      </nav>
      <Outlet/>
    </>
  );
};
