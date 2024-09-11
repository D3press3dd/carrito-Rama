import { vaciar,productosActualizados,overlayContainer,carritoID,containerTotal } from "./carrito.js";

vaciar.addEventListener('click', vaciarCarrito);

function vaciarCarrito() {
  if (productosActualizados.length > 0) {
    if (confirm('¿Está seguro que desea vaciar el carrito?')) {
      overlayContainer.innerHTML = 'Carrito Vacio ☹️';
      containerTotal.style.display = 'none';
      productosActualizados = [];
      carritoID = []; 
      localStorage.setItem('Productos-Actualizados', JSON.stringify(productosActualizados));
    
      setTimeout(() => {
        window.location.reload();
      }, 700);
    }
  }
}