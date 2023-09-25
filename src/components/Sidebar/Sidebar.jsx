import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/statistics">Statistics</NavLink>
    </>
  );
};

export default Sidebar;
