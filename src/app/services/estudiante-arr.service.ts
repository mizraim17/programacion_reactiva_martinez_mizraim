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
      calificacion: 4.6,
      sexo: 'Masculino',
      becado: true,
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
      becado: false,
    },
    {
      nombre: 'Bearded ',
      apellido: 'Lady',
        curso: 'NODE ',
      correo: 'bearded@gmail.com',
        calificacion: 8.6,
      sexo: 'femenino',
      becado: true,
    },
    {
      nombre: 'Michael ',
      apellido: 'Jackson',
        curso: 'NODE ',
      correo: 'bearded@gmail.com',
        calificacion: 8.6,
      sexo: 'femenino',
      becado: true,
    },
    {
      nombre: 'Evil ',
      apellido: 'Morty',
        curso: 'NODE ',
      correo: 'bearded@gmail.com',
        calificacion: 8.6,
      sexo: 'femenino',
      becado: true,
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

    editarEstudiante(estu: any) {
    // console.log('data', this.data);
    // console.log('this.dataSource.data', this.dataSource.data[0]);

    let arr_copy = this.estudiantes

    arr_copy[0] = {
      nombre: estu.nombre.value,
      apellido: estu.apellido.value,
      curso: estu.curso.value,
      correo: estu.correo.value,
      calificacion: estu.calificacion.value,
      sexo: estu.sexo.value,
      becado: estu.becado.value,
    };

    // this.dataSource = new MatTableDataSource(this.estudiantes);

    console.log('arr_copy-->', arr_copy);

    this.estudiantes = arr_copy;
this.estudiante$.next(this.estudiantes);

      }
}
