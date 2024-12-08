import { Component } from '@angular/core';
import { Producto } from '../producto/product.model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {


  productoId: number | null = null;
  descripcionInput: string = '';
  precioInput: number | null = null;

  constructor(private productoService: ProductoService,
    private router: Router, //con Router, podemos mutilizar nuestras rutas, en este caso, llevar a inicio cuando damos a cancelar
    private route: ActivatedRoute //para recuperar el valor de id que recivimos en la url, en el metodo ngOnInit
  ) { }

  ngOnInit() {
    // verificamos si debemos cargar un producto ya existente
    const id = this.route.snapshot.paramMap.get('id');//el Id viene como string
    if (id) {
      // intentamos recuperar Producto desde el servicio
      const producto = this.productoService.getProductoById(Number(id)) //el Id viene como string, lo pasamos a tipo numerico
      if (producto) {
        // si encontrtamos el producto, lo cargamos en el formulario
        this.productoId = producto.id;
        this.descripcionInput = producto.descripcion;
        this.precioInput = producto.precio;

      }
    }
  }



  guardarProducto(evento: Event) {
    evento.preventDefault();


    // vvalidar que sean valores correctos
    if (this.descripcionInput.trim() === '' ||
      this.precioInput === null || this.precioInput <= 0) {

      console.log('Debes ingresar una descripcion y un precio valido');
      return;

    }

    const producto = new Producto(this.productoId, this.descripcionInput, this.precioInput);

    // agregar el producto
    this.productoService.guardarProducto(producto);

    // limpiamos los cambios del formulario
    this.limpiarFormulario();


    //redirigir al inicio cuando guardemos un producto
    this.router.navigate(['/'])
  }

  cancelar() {
    //cuando pulsemos cancelar, redirigiremos al inicio
    this.router.navigate(['/'])
  }

  eliminarProducto() {
    if (this.productoId !== null) {
      this.productoService.eliminarProducto(this.productoId);
      this.limpiarFormulario()

      // redirigimos a inicio
      this.router.navigate(['/'])
    }
  }

  limpiarFormulario() {
    // limpiamos los cambios del formulario
    this.productoId = null;
    this.descripcionInput = '';
    this.precioInput = null;
  }

}
