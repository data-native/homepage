import * as React from "react";
import { NavLink } from "react-router-dom";

export default function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: "underline"
  };

  let activeClassName = "underline"

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
           Home 
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/scalability"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
           Scalability 
          </NavLink>
        </li>
        <li>
          <NavLink
            to="costs"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Cost Optimization
          </NavLink>
        </li>
        <li>
          <NavLink
            to="machinelearning"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Smart Automation with AI 
          </NavLink>
        </li>
        <li>
          <NavLink
            to="security"
          >
            {({ isActive }) => (
              <span className={isActive ? activeClassName : undefined}>
                Security 
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="data"
          >
            {({ isActive }) => (
              <span className={isActive ? activeClassName : undefined}>
                Data 
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="web3dotO"
          >
            {({ isActive }) => (
              <span className={isActive ? activeClassName : undefined}>
                Web 3.0 
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
