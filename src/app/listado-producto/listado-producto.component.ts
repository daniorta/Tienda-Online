import { Component } from '@angular/core';
import { ProductoComponent } from "../producto/producto.component";
import { FormularioComponent } from "../formulario/formulario.component";
import { ProductoService } from '../producto.service';
import { Producto } from '../producto/product.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listado-producto',
  standalone: true,
  imports: [ProductoComponent, FormularioComponent],
  templateUrl: './listado-producto.component.html',
  styleUrl: './listado-producto.component.css'
})


export class ListadoProductoComponent {


  productos: Producto[] = [];

  constructor(private productoService: ProductoService,
    private router: Router //esto se importa para poder utilizar las rutas
    //la variable router, nos da acceso para redirigir hacia la ruta que queremos.
  ) {}


  // ngOnInit() es un metodo especial definodo por angular, y angular, lo llama automaticmente,
  // este metodo lo llama automaticamente cuando una instancia de un componente se inicializa
  // se utiliza para inicializar datos del componente
  // nos aseguramos de cargar los datos una vez este completamente configurado
  ngOnInit(): void {
    // cualquier modificacion de la variable producto, se actualiza automaticamente
    this.productos = this.productoService.productos;

// procesamops el evento emitido
    //detalleProductoEmitter, es un observable o eventEmitter expuesto por productoService
    //al llamarse a suscribe, estamos suscribiendo para recibir notificacion dcada vez que detalleProductoEmnitter emita un nuevo valor.
    // this.productoService.detalleProductoEmitter.subscribe(
    //   (producto: Producto) => alert(`Producto: ${producto.descripcion}, $${producto.precio}`)
    // ); 
  }


  //boton de agregar producto
  agregarProducto() {
    this.router.navigate(['agregar'])
    }

}
