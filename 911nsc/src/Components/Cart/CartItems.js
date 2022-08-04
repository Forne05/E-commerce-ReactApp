import React, { useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/CartItems.scss";
import CartItem from "./CartItem";

import { Link } from "react-router-dom";

import { GlobalCartContext } from "../../context/CartContext";

export default function CartItems() {
  const { myShoppingCart } = useContext(GlobalCartContext);

  return (
   
    <div className="cart-items-products">
      {myShoppingCart.length > 0 ? (
        <table className="table table-borderless table-responsive">
          <thead className="header-cart-item">
            <tr>
              <th scope="col">Articulo:</th>
              <th scope="col">Descripción:</th>
              <th scope="col">Precio:</th>
          
            </tr>
          </thead>
          <tbody>
            {myShoppingCart.map((product) => (
              <CartItem data={product} key={product.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <h2 className="text-center ">
          Tu carrito esta vacío.
          <Link to="/shop" className="cart-empty-link">
          Seguir comprando
          </Link>
        </h2>
      )}
    </div>
    
  );
}
