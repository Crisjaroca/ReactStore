import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../estilos/ListaProductos.css';

const ListaProductos = ({ categoriaSeleccionada, onSelectProduct, productos = [] }) => {
  const [productosEstado, setProductosEstado] = useState(productos);

  useEffect(() => {
    if (categoriaSeleccionada) {
      axios.get(`https://fakestoreapi.com/products/category/${categoriaSeleccionada}`)
        .then(response => setProductosEstado(response.data));
    }
  }, [categoriaSeleccionada]);

  useEffect(() => {
    if (!categoriaSeleccionada) {
      setProductosEstado(productos);
    }
  }, [productos, categoriaSeleccionada]);

  return (
    <div className="lista-productos">
      {productosEstado.map(producto => (
        <div key={producto.id} className="lista-productos__item" onClick={() => onSelectProduct(producto.id)}>
          <img src={producto.image} alt={producto.title} className="lista-productos__imagen" />
          <h3 className="lista-productos__titulo">{producto.title}</h3>
          <p className="lista-productos__precio">${producto.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ListaProductos;
