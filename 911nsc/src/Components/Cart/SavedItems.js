import React,{useContext} from "react";
import SavedItem from './SavedItem';

import {GlobalCartContext} from '../../context/CartContext';
export default function SavedItems() {
  const {cartSavedForLater}=useContext(GlobalCartContext);
  
  return (
    <div className="cart-items-saved-for-later">
      <h2 className="text-center">Guardar para mas tarde<span className="cart-header-number-of-items"> {cartSavedForLater.length>0 ? cartSavedForLater.length+" of "+ cartSavedForLater.length+" items": "0 items"}</span></h2>
      {
        cartSavedForLater.length>0?
        <table className="table table-borderless table-responsive">
        <thead className="header-cart-item">
          <tr>
            <th scope="col">Producto:</th>
            <th scope="col">Descripcion:</th>
            <th scope="col">Precio:</th>
           
          </tr>
        </thead>
        <tbody>
        {cartSavedForLater.map((product) => (
            <SavedItem data={product} key={product.id} />
          ))}
        </tbody>
      </table> 
        :
        <h3 className="saved-items-list-empty">Tu carrito está vacío </h3>
      }
     
      
    </div>
  );
}
