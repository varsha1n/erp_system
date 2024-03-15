import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const StyledNav = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon {
      font-size: 4.2rem;
      color: ${({ theme }) => theme.colors.black};
    }

    .close-outline {
      display: none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: 1px solid black;
        position: relative;
        margin-right: 20px; /* Increased spacing */
      }

      .active .mobile-nav-icon {
        display: none;
      }

      .active .close-outline {
        display: inline-block;
        margin-right: 20px; /* Increased spacing */
      }

      .navbar-lists {
        width: 150vw;
        height: 50vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0s linear;
      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 0.3s linear;
      }

      .navbar-link {
        font-size: 4.2rem;
      }

      .cart-trolley--link .cart-trolley {
        font-size: 5.2rem;
      }
    }
  `;

  const closeMenu = () => {
    setMenuIcon(false);
  };

  return (
    <StyledNav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink to="/" className="navbar-link" onClick={closeMenu}>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/Home" className="navbar-link" onClick={closeMenu}>
              Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/Cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" onClick={closeMenu} />
            </NavLink>
          </li>

          <li>
            <NavLink to="/History" className="navbar-link" onClick={closeMenu}>
              History
            </NavLink>
          </li>
        </ul>

        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </StyledNav>
  );
};

export default Nav;
