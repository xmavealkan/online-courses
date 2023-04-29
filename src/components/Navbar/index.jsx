import React from "react";
import styled from "styled-components";
import Logoicon from "../../images/logo.png";

const Navbar = () => {
  return (
    <Nav>
      <Logo src={Logoicon} />
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Contact</MenuItem>
        <MenuItem>Courses</MenuItem>
        <MenuItem>Go to lesson</MenuItem>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  padding: 1rem;
`;

const Logo = styled.img`
  font-size: 1.5rem;
  font-weight: bold;
  width: 80px;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  margin-right: 1rem;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

export default Navbar;
