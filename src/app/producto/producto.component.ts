import { Component, Input } from '@angular/core';
import { Producto } from './product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  @Input() producto!: Producto; //producto es la variable que va a almacenar el valor del componente padre

  constructor(private router: Router){}

  editarProducto(id:number){
    //pasamos el id en la URL
    this.router.navigate(['/editar', id])
  }

}


