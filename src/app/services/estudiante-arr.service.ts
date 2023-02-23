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
      nombre: 'Johnny  ',
      apellido: 'Depp',
      curso: 'ANGULAR',
      correo: 'johnny_depp@gmail.com',
      calificacion: 6,
      sexo: 'Masculino',
      becado: false,
      foto: 'https://rickandmortyapi.com/api/character/avatar/183.jpeg',
    },
    {
      nombre: 'Amy',
      apellido: 'Poopybutthole',
      curso: 'REACT',
      correo: 'amy@gmail.com',
      calificacion: 8.6,
      sexo: 'femenino',
      becado: true,

      foto: 'https://rickandmortyapi.com/api/character/avatar/247.jpeg',
    },

    {
      nombre: 'Snake  ',
      apellido: 'Reporter',
      curso: 'NODE ',
      correo: 'snake_reporter@gmail.com',
      calificacion: 5.9,
      sexo: 'masculino',
      becado: false,
      foto: 'https://rickandmortyapi.com/api/character/avatar/589.jpeg',
    },
    {
      nombre: 'Aqua  ',
      apellido: ' Morty',
      curso: 'NODE ',
      correo: 'aqua_norty@gmail.com',
      calificacion: 8.6,
      sexo: 'masculino',
      becado: true,

      foto: 'https://rickandmortyapi.com/api/character/avatar/21.jpeg',
    },
    {
      nombre: 'Stan Lee  ',
      apellido: 'Rick',
      curso: 'NODE ',
      correo: 'stanlee_rick@gmail.com',
      calificacion: 1.9,
      sexo: 'masculino',
      becado: false,
      foto: 'https://rickandmortyapi.com/api/character/avatar/810.jpeg',
    },
    {
      nombre: 'Karen ',
      apellido: 'Entity',
      curso: 'NODE ',
      correo: 'karen@gmail.com',
      calificacion: 7.7,
      sexo: 'femenino',
      becado: true,

      foto: 'https://rickandmortyapi.com/api/character/avatar/188.jpeg',
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

    arr_copy.map((elem, i) => {
      if (arr_copy[i] == data) {
        // console.log('arr_copy[index]', arr_copy[i]);
        console.log('element', estu.foto);

        arr_copy[i] = {
          nombre: estu.nombre,
          apellido: estu.apellido,
          curso: estu.curso,
          correo: estu.correo,
          calificacion: estu.calificacion,
          sexo: estu.sexo,
          becado: estu.becado,
          foto: estu.foto,
        };
      }
    });

    this.estudiantes = arr_copy;
    this.estudiante$.next(this.estudiantes);
  }

  eliminarEstudiante(i: number) {
    this.estudiantes.splice(i, 1);
    this.estudiante$.next(this.estudiantes);
  }

  filtrarEstudiante(word: string) {
    let result;
    const array_copy = this.estudiantes;

    console.log('entro a array_copy', array_copy);

    if (word == '') {
      console.log('entro a vacio', array_copy);

      this.estudiantes = array_copy;
    } else {
      result = this.estudiantes.filter((ele) => {
        return ele.nombre
          .toLocaleLowerCase()
          .includes(word.toLocaleLowerCase());
      });
      this.estudiantes = result;
    }

    this.estudiante$.next(this.estudiantes);
  }
}
