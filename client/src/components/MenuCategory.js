import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const Nav = styled.nav`
  ul {
    list-style: none;
    margin-right: 15px;
    padding: 0;
  }
  ul:before,
  ul:after {
    content: "";
    display: table;
  }
  ul:after {
    clear: both;
  }
  ul > li {
    float: left;
    position: relative;
  }
  .link {
    display: block;
    padding: 6px 15px;
    font-size: 14px;
    line-height: 1.8em;
    color: #fff;
  }
  .link:hover {
    text-decoration: none;
  }
  li ul {
    background: #fff;
  }
  li ul li {
    width: 200px;
  }
  li ul li:hover {
    background: rgba(40, 53, 147, 0.1);
  }
  li ul .link {
    border: none;
    color: #000;
  }

  li ul {
    position: absolute;
    left: 0;
    top: 20px;
    z-index: 1;
    visibility: hidden;
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transition: 200ms ease;
    -moz-transition: 200ms ease;
    -o-transition: 200ms ease;
    transition: 200ms ease;
  }
  ul > li:hover ul {
    visibility: visible;
    opacity: 1;
    filter: alpha(opacity=100);
    box-shadow: 0px 0px 10px 2px rgba(97, 97, 97, 0.5);
  }
`;

const MenuCategory = ({ genres = [], type, title, burger }) => {
  return (
    <Nav className="nav">
      <ul>
        <li>
          <a href="#">{title}</a>
          <ul>
            {genres.map(item => {
              return (
                <li key={item.id}>
                  <NavLink className="link" to={`/genre/${type}/${item.name}`}>
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </Nav>
  );
};

export default MenuCategory;
