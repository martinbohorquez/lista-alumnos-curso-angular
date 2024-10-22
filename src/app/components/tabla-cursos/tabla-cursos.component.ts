import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models/curso-to';
import { cursos } from './mock';

@Component({
  selector: 'app-tabla-cursos',
  standalone: true,
  imports: [],
  templateUrl: './tabla-cursos.component.html',
  styleUrl: './tabla-cursos.component.css'
})
export class TablaCursosComponent implements OnInit {

  public id = 1;
  public cursos?: Curso[];

  ngOnInit(): void {
    this.cursos = cursos;
  }
}