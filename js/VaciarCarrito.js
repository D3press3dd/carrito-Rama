import { vaciar,productosActualizados,overlayContainer,carritoID,containerTotal } from "./carrito.js";

vaciar.addEventListener('click', vaciarCarrito);

function vaciarCarrito() {
  if (productosActualizados.length > 0) {
    if (confirm('¿Está seguro que desea vaciar el carrito?')) {
      overlayContainer.innerHTML = 'Carrito Vacio ☹️';
      containerTotal.style.display = 'none';
      // cuando haces importacion de una variable javascript la trata como inmutable por eso no puedes reasignar directamente, pero si puedes cambiar el tamaño para que sea cero o tambien puedes crear una funcion que mute tu array y exportala directamente (que seria lo mejor), pero me imaginos que estas aprendiendo asi que sigue peleandote con eso, tu puedes!!
      productosActualizados.length = 0;
      carritoID.length = 0; 
      localStorage.setItem('Productos-Actualizados', JSON.stringify(productosActualizados));
    
      setTimeout(() => {
        window.location.reload();
      }, 700);
    }
  }
}
