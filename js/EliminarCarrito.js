import  {productosActualizados} from './carrito.js'; 
import  {iconCart} from './carrito.js'; 
import  {actualizarOverlay, actualizarValorTotal} from './carrito.js' 




// Ahora puedes trabajar con productosActualizados e iconCart



export function eliminarProducto() {
  let eliminarBoton = document.querySelectorAll('.eliminar__boton');

  eliminarBoton.forEach(botonEliminar => {
    botonEliminar.addEventListener('click', () => {
      let idProducto = parseInt(botonEliminar.dataset.id);
      let producto = productosActualizados.find(p => p.id === idProducto);

      if (producto) {
        if (producto.cantidad > 1) {
          // Disminuir la cantidad si es mayor a 1
          producto.cantidad--;
          iconCart.innerHTML = producto.cantidad;
        } else {
          // Si la cantidad es 1, eliminar el producto
          productosActualizados.splice(productosActualizados.findIndex(produc=>produc.id===idProducto), 1);

          iconCart.innerHTML = productosActualizados.length > 0 ? productosActualizados.reduce((acc, prod) => acc + prod.cantidad, 0) : 0;
        }

        // Guardar el estado actualizado en localStorage
        localStorage.setItem('Productos-Actualizados', JSON.stringify(productosActualizados));

        // Actualizar la interfaz del overlay y el valor total
        actualizarOverlay();
        actualizarValorTotal();
      }
    });
  });
}
