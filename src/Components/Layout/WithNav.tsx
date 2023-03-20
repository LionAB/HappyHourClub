import React from 'react';
import { Outlet } from 'react-router';
import MiniDrawer from '../AppBar';


export default function WithNav() {
    // ici les routes qui ont besoin d'un menu
  return (
    <>
      <MiniDrawer />
      <Outlet />
    </>
  );
};

