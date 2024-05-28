import React, { useState } from 'react';
import '../estilos/CarritoCompras.css';

const CarritoCompras = ({ carrito }) => {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const toggleMostrarCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + parseFloat(producto.price), 0).toFixed(2);
  };

  return (
    <div className="carrito-compras" onClick={toggleMostrarCarrito}>
      <h2 className="carrito-compras__titulo">Carrito ({carrito.length})</h2>
      {mostrarCarrito && (
        <div className="carrito-compras__contenido">
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
          <p className="carrito-compras__total">Total: ${calcularTotal()}</p>
        </div>
      )}
    </div>
  );
};

export default CarritoCompras;
