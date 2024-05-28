import React, { useState } from 'react';
import MenuCategorias from './componentes/MenuCategorias';
import ListaProductos from './componentes/ListaProductos';
import DetalleProducto from './componentes/DetalleProducto';
import CarritoCompras from './componentes/CarritoCompras';
import './App.css';

const App = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [carrito, setCarrito] = useState(JSON.parse(sessionStorage.getItem('carrito')) || []);

  const handleSelectCategory = (categoria) => {
    setCategoriaSeleccionada(categoria);
    setProductoSeleccionado(null);
  };

  const handleSelectProduct = (productoId) => {
    setProductoSeleccionado(productoId);
  };

  const handleAgregarAlCarrito = (producto) => {
    const nuevoCarrito = [...carrito, producto];
    setCarrito(nuevoCarrito);
    sessionStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
  };

  return (
    <div className="app">
      <MenuCategorias onSelectCategory={handleSelectCategory} />
      {productoSeleccionado ? (
        <DetalleProducto productoId={productoSeleccionado} onAgregarAlCarrito={handleAgregarAlCarrito} />
      ) : (
        categoriaSeleccionada && <ListaProductos categoriaSeleccionada={categoriaSeleccionada} onSelectProduct={handleSelectProduct} />
      )}
      <CarritoCompras carrito={carrito} />
    </div>
  );
};

export default App;
