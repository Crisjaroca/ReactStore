import React from 'react';
import '../estilos/CarritoCompras.css';

const CarritoCompras = ({ carrito }) => {
  return (
    <div className="carrito-compras">
      <h2 className="carrito-compras__titulo">Carrito de Compras</h2>
      <ul className="carrito-compras__lista">
        {carrito.map((producto, index) => (
          <li key={index} className="carrito-compras__item">
            <img src={producto.image} alt={producto.title} className="carrito-compras__imagen" />
            <div className="carrito-compras__detalles">
              <h3 className="carrito-compras__titulo">{producto.title}</h3>
              <p className="carrito-compras__precio">${producto.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarritoCompras;
