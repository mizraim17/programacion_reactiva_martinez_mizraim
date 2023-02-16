import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Estudiante } from '../../models/estudiante';
import { MatDialog } from '@angular/material/dialog';
import { EditarEstudianteComponent } from '../editar-estudiante/editar-estudiante.component';
import { EstudianteArrService } from '../../services/estudiante-arr.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent {

  estudiantes!: Estudiante[]

  constructor(
    private dialog: MatDialog,
    private estudianteService: EstudianteArrService) {

    console.log("-->",estudianteService.obtenerCurso());
    console.log("estudiantes-->",this.estudiantes );

  }


  dataSource: MatTableDataSource<Estudiante> =
    new MatTableDataSource<Estudiante>(this.estudiantes);



  columnas: string[] = [
    'Nombre',
    'Curso',
    'Calificacion',
    'Aprobado',
    'Acciones',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  editarDatos(estudiante: Estudiante) {
    const dialogRef = this.dialog.open(EditarEstudianteComponent, {
      data: estudiante,
    });
  }

  eliminarDatos(i: number) {
    console.log('entro a eliminar', i);

    let arr_copy = [...this.estudiantes];

    arr_copy.splice(i, 1);

    this.estudiantes = arr_copy;

    this.dataSource = new MatTableDataSource(this.estudiantes);
  }
}
