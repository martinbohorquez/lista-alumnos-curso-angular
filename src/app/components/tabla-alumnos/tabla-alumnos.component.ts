import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno-to';
import { alumnos } from './mock';

@Component({
  selector: 'app-tabla-alumnos',
  standalone: true,
  imports: [],
  templateUrl: './tabla-alumnos.component.html',
  styleUrl: './tabla-alumnos.component.css'
})
export class TablaAlumnosComponent implements OnInit {

  public alumnos?: Alumno[];

  ngOnInit(): void {
    this.alumnos = alumnos;
  }

}
