import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoProductoComponent } from "./listado-producto/listado-producto.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListadoProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Tienda Online';
}
