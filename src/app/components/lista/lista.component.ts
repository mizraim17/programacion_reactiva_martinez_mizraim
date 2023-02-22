import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../models/estudiante';
import { Observable } from 'rxjs';
import { EstudianteArrService } from '../../services/estudiante-arr.service';
import { EditarEstudianteComponent } from '../editar-estudiante/editar-estudiante.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent {
  estudiantes!: Estudiante;
  estudiantes$!: Observable<Estudiante[]>;

  constructor(
    private dialog: MatDialog,
    private estudianteService: EstudianteArrService
  ) {}

  filtrar(event: Event) {
    let word = (event.target as HTMLInputElement).value;

    this.estudianteService.filtrarEstudiante(word);
  }

  ngOnInit() {
    this.estudiantes$ = this.estudianteService.obtenerEstudiantesObservable();
  }

  editarDatos(estudiante: Estudiante) {
    const dialogRef = this.dialog.open(EditarEstudianteComponent, {
      data: estudiante,
    });
  }

  eliminarDatos(i: number) {
    this.estudianteService.eliminarEstudiante(i);
  }
}
