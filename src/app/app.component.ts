import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaAlumnosComponent } from "./components/tabla-alumnos/tabla-alumnos.component";
import { TablaCursosComponent } from "./components/tabla-cursos/tabla-cursos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TablaAlumnosComponent, TablaCursosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lista-cursos';

  cursos: boolean = true;

  handleCambio() {
    this.cursos = !this.cursos;
  }
}
