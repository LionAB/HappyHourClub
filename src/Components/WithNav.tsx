import React from 'react';
import { Outlet } from 'react-router';
import MiniDrawer from './AppBar';


export default function WithNav() {
    // ici les routes sont imbriquées
  return (
    <>
      <MiniDrawer />
      <Outlet />
    </>
  );
};

