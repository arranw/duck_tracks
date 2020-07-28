import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavWrapper = styled.nav`
  min-width: 300px;

  grid-area: nav;
  padding: 0.5rem;
  height: var(--navbar-height);

  background: #0e153a;
  color: #e2f3f5;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  font-size: 1.2rem;

  & .active-link {
    border-color: var(--attention-color) !important;
  }

  a:hover {
    border-color: var(--attention-color);
  }
`;

const NavLinkItem = styled(NavLink)`
  margin-right: 1rem;
  padding: 0.25rem 0.75rem;
  transition: border 0.5s ease, color 0.3s ease;
  border-bottom: 2px solid transparent;
`;

const Navbar = () => {
  return (
    <NavWrapper>
      <NavLinkItem exact to="/">
        <h1>Duck Tracks</h1>
      </NavLinkItem>

      <NavLinks>
        <li>
          <NavLinkItem exact activeClassName="active-link" to="/">
            Home
          </NavLinkItem>
        </li>
        <li>
          <NavLinkItem exact activeClassName="active-link" to="/submit">
            Submit
          </NavLinkItem>
        </li>
        <li>
          <NavLinkItem exact activeClassName="active-link" to="/view">
            View
          </NavLinkItem>
        </li>
      </NavLinks>
    </NavWrapper>
  );
};

export default Navbar;
