import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Estudiante } from '../../models/estudiante';
import { MatDialog } from '@angular/material/dialog';
import { EditarEstudianteComponent } from '../editar-estudiante/editar-estudiante.component';
import { EstudianteArrService } from '../../services/estudiante-arr.service';
import { AgregarEstudianteComponent } from '../agregar-estudiante/agregar-estudiante.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent {
  dataSource!: MatTableDataSource<Estudiante>;

  // addEstudiante() {
  //   let c: Estudiante = {
  //     nombre: 'mizraim ',
  //     apellido: 'Rick',
  //     curso: 'ANGULAR',
  //     calificacion: 4.6,
  //     correo: 'baby@gmail.com',
  //     sexo: 'Masculino',
  //     becado: true,
  //   };

  //   this.estudianteService.agregarEstudiante(c);
  // }

  constructor(
    private dialog: MatDialog,
    private estudianteService: EstudianteArrService
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Estudiante>();
    this.estudianteService
      .obtenerEstudiantesObservable()
      .subscribe((estudiantes: Estudiante[]) => {
        this.dataSource.data = estudiantes;
      });
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

  addEstudiante() {
    const dialogRef = this.dialog.open(AgregarEstudianteComponent, {});
  }

  eliminarDatos(i: number) {
    let arr_copy = this.dataSource.data;

    arr_copy.splice(i, 1);

    this.dataSource.data = arr_copy;
  }
}
