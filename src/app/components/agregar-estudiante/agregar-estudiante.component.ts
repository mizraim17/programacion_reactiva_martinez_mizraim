import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EstudianteArrService } from '../../services/estudiante-arr.service';
import { Estudiante } from '../../models/estudiante';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.scss'],
})
export class AgregarEstudianteComponent {
  dataSource!: MatTableDataSource<Estudiante>;
  formulario: FormGroup;
  suscripcion!: Subscription;

  constructor(
    private estudianteService: EstudianteArrService,

    private dialogRef: MatDialogRef<AgregarEstudianteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    let controles: any = {
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      curso: new FormControl('', [Validators.required]),
      correo: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}'
        ),
      ]),
      sexo: new FormControl('', [Validators.required]),
      calificacion: new FormControl('', [Validators.required]),
      becado: new FormControl('', []),
    };
    this.formulario = new FormGroup(controles);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Estudiante>();
    this.suscripcion = this.estudianteService
      .obtenerEstudiantesObservable()
      .subscribe((estudiantes: Estudiante[]) => {
        this.dataSource.data = estudiantes;
      });
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  addEstudiante(form: any) {
    console.log('form', form);
    this.estudianteService.agregarEstudiante(form.value);
  }
}
