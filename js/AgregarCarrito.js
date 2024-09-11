import  {productosActualizados} from './carrito.js'; 
import  {iconCart} from './carrito.js'; 
import  {actualizarOverlay, actualizarValorTotal} from './carrito.js' 


 

export function agregarProducto() {
  let agregarBoton = document.querySelectorAll('.agregar__boton'); // Seleccionar botones después de que se actualizó el overlay
  agregarBoton.forEach(botonAgregar => {
    botonAgregar.addEventListener('click', () => {
      let idProducto = Number(botonAgregar.dataset.id);
      let producto = productosActualizados.find(p => p.id === idProducto);
      if (producto) {
        producto.cantidad++; 
        iconCart.innerHTML = producto.cantidad;
        localStorage.setItem('Productos-Actualizados', JSON.stringify(productosActualizados));
        actualizarOverlay(); // Recalcular el overlay
        actualizarValorTotal(); // Recalcular el total
      }
    });
  });
}


