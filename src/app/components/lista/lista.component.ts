import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../models/estudiante';
import { Observable } from 'rxjs';
import { EstudianteArrService } from '../../services/estudiante-arr.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent {
  estudiantes!: Estudiante;
  estudiantes$!: Observable<Estudiante[]>;

  constructor(private EstudianteArrService: EstudianteArrService) {}

  ngOnInit() {
    this.estudiantes$ =
      this.EstudianteArrService.obtenerEstudiantesObservable();
  }
}
