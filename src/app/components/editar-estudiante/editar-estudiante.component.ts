import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EstudianteArrService } from '../../services/estudiante-arr.service';
import { Estudiante } from '../../models/estudiante';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.scss'],
})
export class EditarEstudianteComponent {
  formulario: FormGroup;

  private arr_1: Estudiante[] = [
    {
      nombre: 'Baby ',
      apellido: 'Rick',
      curso: 'ANGULAR',
      calificacion: 4.6,
      correo: 'baby@gmail.com',
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
      becado: new FormControl(data.becado, []),
      contrasena: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern(
          '(?=^.{8,}$)((?=.*d)|(?=.*W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"'
        ),
      ]),
    };
    this.formulario = new FormGroup(controles);
  }

  editarEstudiante() {
    // this.dataSource.data = arr_copy;
  }
}
