import { Injectable } from '@angular/core';
import { Estudiante } from '../models/estudiante';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstudianteArrService {
  private estudiante$!: BehaviorSubject<Estudiante[]>;

  private estudiantes: Estudiante[] = [
    {
      nombre: 'Baby ',
      apellido: 'Rick',
      curso: 'ANGULAR',
      correo: 'baby@gmail.com',
      calificacion: 6,
      sexo: 'Masculino',
      becado: false,
    },
    {
      nombre: 'Amy',
      apellido: 'Poopybutthole',
      curso: 'REACT',
      correo: 'amy@gmail.com',
      calificacion: 8.6,
      sexo: 'femenino',
      becado: true,
    },
    {
      nombre: 'Karen ',
      apellido: 'Entity',
      curso: 'NODE ',
      correo: 'karen@gmail.com',
      calificacion: 7.7,
      sexo: 'femenino',
      becado: true,
    },
    {
      nombre: 'Bearded ',
      apellido: 'Lady',
      curso: 'NODE ',
      correo: 'bearded@gmail.com',
      calificacion: 5.9,
      sexo: 'femenino',
      becado: false,
    },
    {
      nombre: 'Michael ',
      apellido: 'Jackson',
      curso: 'NODE ',
      correo: 'bearded@gmail.com',
      calificacion: 8.6,
      sexo: 'masculino',
      becado: true,
    },
    {
      nombre: 'Evil ',
      apellido: 'Morty',
      curso: 'NODE ',
      correo: 'bearded@gmail.com',
      calificacion: 1.9,
      sexo: 'masculino',
      becado: false,
    },
  ];

  constructor() {
    this.estudiante$ = new BehaviorSubject(this.estudiantes);
  }

  ngOnInit(): void {}

  obtenerEstudiantesObservable(): Observable<Estudiante[]> {
    return this.estudiante$.asObservable();
  }

  agregarEstudiante(estudiante: Estudiante) {
    this.estudiantes.push(estudiante);
    this.estudiante$.next(this.estudiantes);
  }

  editarEstudiante(estu: any, data: Estudiante) {
    console.log('estu', estu);
    // console.log('this.dataSource.data', this.dataSource.data[0]);

    let arr_copy = this.estudiantes;

    arr_copy.forEach(function (currentValue, index, arr) {
      if (arr_copy[index] == data) {
        console.log('arr_copy[index]', arr_copy[index]);
        console.log('estu', estu);

        arr_copy[index] = {
          nombre: estu.nombre,
          apellido: estu.apellido,
          curso: estu.curso,
          correo: estu.correo,
          calificacion: estu.calificacion,
          sexo: estu.sexo,
          becado: estu.becado,
        };
      }
    });

    console.log('arr_copy finmal', arr_copy);

    this.estudiantes = arr_copy;
    this.estudiante$.next(this.estudiantes);
  }
}
