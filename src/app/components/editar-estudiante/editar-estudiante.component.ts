import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EstudianteArrService } from '../../services/estudiante-arr.service';
import { Estudiante } from '../../models/estudiante';
import { DataSource } from '@angular/cdk/collections';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.scss'],
})
export class EditarEstudianteComponent {
  dataSource!: MatTableDataSource<Estudiante>;

  formulario: FormGroup;

  private arr_1: Estudiante[] = [
    {
      nombre: 'Baby ',
      apellido: 'Rick',
      curso: 'ANGULAR',
      correo: 'baby@gmail.com',
      calificacion: 4.6,
      sexo: 'Masculino',
      becado: true,
    },
  ];

  constructor(
    private estudianteService: EstudianteArrService,

    private dialogRef: MatDialogRef<EditarEstudianteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    let controles: any = {
      nombre: new FormControl(data.nombre, [Validators.required]),
      apellido: new FormControl(data.apellido, [Validators.required]),
      curso: new FormControl(data.curso, [Validators.required]),
      correo: new FormControl(data.correo, [
        Validators.required,
        Validators.pattern(
          '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}'
        ),
      ]),
      sexo: new FormControl(data.sexo, [Validators.required]),
      becado: new FormControl(data.becado, []),
    };
    this.formulario = new FormGroup(controles);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Estudiante>();
    this.estudianteService
      .obtenerEstudiantesObservable()
      .subscribe((estudiantes: Estudiante[]) => {
        this.dataSource.data = estudiantes;
      });

    console.log('this.dataSource.data', this.dataSource.data);
  }

  editarEstudiante(estu: any) {
    console.log('data', this.data);
    console.log('this.dataSource.data', this.dataSource.data[0]);

    let arr_copy = this.dataSource.data;

    arr_copy[0] = {
      nombre: estu.nombre.value,
      apellido: estu.apellido.value,
      curso: estu.curso.value,
      correo: estu.correo.value,
      calificacion: 0,
      sexo: estu.sexo.value,
      becado: estu.becado.value,
    };

    // this.dataSource = new MatTableDataSource(this.estudiantes);

    console.log('arr_copy-->', arr_copy);
    // console.log('entro al formulario', this.formulario.value);

    // arr_copy.push(this.formulario.value);

    this.dataSource.data = arr_copy;
  }
}
