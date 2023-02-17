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

  constructor() {
    this.estudiante$ = new BehaviorSubject(this.estudiantes);

    //   this.estudiante$() = new Observable<Estudiante[]>(
    //   (subscriptor) => {
    //     subscriptor.next(this.estudiantes);
    //   }
    // );
  }

  ngOnInit(): void {}

  obtenerEstudiantesObservable(): Observable<Estudiante[]> {
    return this.estudiante$.asObservable();
  }

  obtenerCurso(): Estudiante[] {
    return this.estudiantes;
  }

  agregarEstudiante(estudiante: Estudiante) {
    this.estudiantes.push(estudiante);
    this.estudiante$.next(this.estudiantes);
  }
}
