import { Pipe, PipeTransform } from '@angular/core';
import { Estudiante } from '../models/estudiante';

@Pipe({
  name: 'fontSize',
})
export class FontSizePipe implements PipeTransform {
  transform(element: Estudiante): string {
    let resultado: string;
    resultado = `${element.nombre}  ${element.apellido}`;
    return resultado;
  }
}
