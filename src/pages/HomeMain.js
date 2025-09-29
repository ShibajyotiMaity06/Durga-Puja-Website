import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent';

const HomeMain = () => (
  <div>
    <NavbarComponent />
    <div style={{ padding: '2em', minHeight: 'calc(100vh - 56px)', background: "#f6f6f0" }}>
      <Outlet />
    </div>
  </div>
);

export default HomeMain;
