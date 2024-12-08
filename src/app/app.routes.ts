import { Routes } from '@angular/router';
import { ListadoProductoComponent } from './listado-producto/listado-producto.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {path: '', component: ListadoProductoComponent},//localhost:4200
    {path: 'listado', component: ListadoProductoComponent},//localhost:4200
    {path: 'agregar', component: FormularioComponent},//localhost:4200/formulario
    {path: 'editar/:id', component: FormularioComponent},
    //ruta comodin para cualquier otra ruta no registrada
    {path: '**', component: ErrorComponent}

];
