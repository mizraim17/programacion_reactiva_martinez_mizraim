import { Injectable } from '@angular/core';
import { Estudiante } from '../models/estudiante';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root',
})
export class EstudianteArrService {
  private estudiantes: Estudiante[] = [
    {
      nombre: 'Baby ',
      apellido: 'Rick',
      curso: 'ANGULAR',
      calificacion: 4.6,
      correo: 'baby@gmail.com',
      sexo: 'Masculino',
      becado: true,
    },
    {
      nombre: 'Amy',
      apellido: 'Poopybutthole',
      sexo: 'femenino',
      correo: 'amy@gmail.com',
      curso: 'REACT',
      calificacion: 8.6,

      becado: true,
    },
    {
      nombre: 'Karen ',
      apellido: 'Entity',
      sexo: 'femenino',
      correo: 'karen@gmail.com',
      curso: 'NODE ',
      calificacion: 7.7,
      becado: false,
    },
    {
      nombre: 'Bearded ',
      apellido: 'Lady',
      sexo: 'masculino',
      correo: 'bearded@gmail.com',
      curso: 'ANGULAR',
      calificacion: 8.4,
      becado: true,
    },
    {
      nombre: 'Michael ',
      apellido: 'Jackson',
      sexo: 'masculino',
      correo: 'michael@gmail.com',
      curso: 'NODE',
      calificacion: 4,
      becado: false,
    },
    {
      nombre: 'Evil ',
      apellido: 'Morty',
      sexo: 'masculino',
      correo: 'evil@gmail.com',
      curso: 'REACT',
      calificacion: 5.4,
      becado: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Estudiante>(this.estudiantes);
  }

  obtenerCurso(): Estudiante[] {
    return this.estudiantes;
  }

  agregarEstudiante(estudiante: Estudiante) {
    console.log('es', estudiante);

    this.estudiantes.push(estudiante);
  }
}
