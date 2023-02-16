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
  estudiantes!: Estudiante[];

  dataSource!: MatTableDataSource<Estudiante>;

  addEstudiante() {
    let c: Estudiante = {
      nombre: 'mizraim ',
      apellido: 'Rick',
      curso: 'ANGULAR',
      calificacion: 4.6,
      correo: 'baby@gmail.com',
      sexo: 'Masculino',
      becado: true,
    };

    this.estudianteService.agregarEstudiante(c);
  }

  constructor(
    private dialog: MatDialog,
    private estudianteService: EstudianteArrService
  ) {}

  ngOnInit(): void {
    this.estudiantes = this.estudianteService.obtenerCurso();
    this.dataSource = new MatTableDataSource<Estudiante>(this.estudiantes);
  }

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

    let arr_copy = this.dataSource.data;

    console.log('arr_copy', arr_copy);

    arr_copy.splice(i, 1);
  }
}
