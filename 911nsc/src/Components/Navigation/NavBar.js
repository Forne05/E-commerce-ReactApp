import React, { useState, useContext } from "react";
import {
  faBars,
  faShoppingCart,
  faCaretDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { myShoppingCart } = useContext(GlobalCartContext);
  const [toggleNav, setToggelNav] = useState(false);

  function handleToggle(e) {
    e.preventDefault();
    setToggelNav(!toggleNav);
  }
  return (
    <div>
      <header>
        <div className="container-nav">
          <nav className={` ${toggleNav ? "active" : ""}`}>
            <div className="menu-icon">
              <FontAwesomeIcon
                icon={faBars}
                className="menu-icon-bar"
                onClick={(e) => handleToggle(e)}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className="menu-icon-close"
                onClick={(e) => handleToggle(e)}
              />
            </div>

            <ul className="navigation-list">
              <li>
                <Link to="/">
                Home
                </Link>
              </li>
              <li>
              <Link to="#">
              Categoria
              <i className="icon ">
                    <FontAwesomeIcon icon={faCaretDown} />
                  </i>
                </Link>
               
                <ul className="products-cat">
                  <li>
                    <Link to="/collections">All</Link>
                    
                  </li>
                  <li>
                    <Link to="/collections/men">Ropa para caballeros</Link>
                  </li>
                  <li>
                    <Link to="/collections/women">Ropa para dama</Link>
                  </li>
                  <li>
                    <Link to="/collections/kids">Ropa para niños</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#">
                  Productos
                  <i className="icon ">
                    <FontAwesomeIcon icon={faCaretDown} />
                  </i>
                </Link>
                <ul className="products-cat">
                  <li>
                    <Link to="/trend/New">Nuevo</Link>
                  </li>
                  <li>
                    <Link to="/trend/Trending">Tendencia</Link>
                  </li>
                </ul>
              </li>
              
              <li className="nav-shopping-cart">
                <Link
                  to="/cart"
                  className="cart position-relative d-inline-flex"
                >
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="store-cart-icon"
                  />
                  <span className="cart-basket d-flex align-items-center justify-content-center ">
                    {myShoppingCart.length}{" "}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
