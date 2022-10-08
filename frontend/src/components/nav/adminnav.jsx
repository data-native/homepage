import styled from 'styled-components';
import * as React from "react";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  display: inline-grid;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  ul li {
    float: left;
    padding: 10px 20px;
    margin-right: 10px;
    background: grey;
  }
`;

export function AdminNav({links}) {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: "underline"
  };

  let activeClassName = "underline"
  let numbers = [1,2,3,4,5];

  let items = links.map((link) => {
  })

  return (
    <StyledNav>
      <ul>
        {links.map(link =>

        <li key={link.to}>
          <NavLink
            key={link.to}
            to={link.to}
            style={({ isActive }) =>
              isActive ? activeStyle : undefined}
n         >
           {link.name} 
          </NavLink>
        </li>
        )}
      </ul>
    </StyledNav>
  );
}
