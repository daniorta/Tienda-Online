import { Injectable } from '@angular/core';
import { Producto } from './producto/product.model';



@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  // variable para el ID siguiente y unico
  private idSiguiente = 1;


  // importamos la clase Producto
  productos: Producto[] = [];

  constructor(){
    this.inicializarProductos();
  }

  private inicializarProductos(){
    const producto1 = new Producto(this.idSiguiente++, 'Pantalon', 130.0 )
    const producto2 = new Producto(this.idSiguiente++, 'Camisa', 15.0 )
    const producto3 = new Producto(this.idSiguiente++, 'Pijama', 20)

    // agregar productos al array de productos
    this.productos.push(producto1, producto2, producto3)
  }

  

    //Agregar o modificar un producto existente
  guardarProducto(producto: Producto) {
    //caso de agregar producto
    if(producto.id === null){
      producto.id = this.idSiguiente++;
      this.productos.push(producto)
    }

    // Caso de actualizar | editar
    else{
      // si el producto tiene un ID, entonces se trata de editar
      const indice = this.productos.findIndex(p => p.id === producto.id)

      // si el valor del indice es diferente a -1, quier decir que si encontramos el producto en nuestro arreglo
      if(indice !== -1){
        this.productos[indice] = producto;
      }
    }
    }

    getProductoById(id: number): Producto | undefined{
      return this.productos.find(producto => producto.id === id)
    }

    eliminarProducto(id: number){
      const indice = this.productos.findIndex(producto => producto.id === id);

      if(indice !== -1){//si es -1 es xk no existe
        this.productos.splice(indice, 1) //si el indice lo encontramos, eliminamos este objeto
      }
      
    }

}
