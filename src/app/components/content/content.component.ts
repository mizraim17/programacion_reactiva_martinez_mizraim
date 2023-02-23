import { Component } from '@angular/core';
import { EstudianteArrService } from 'src/app/services/estudiante-arr.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  constructor(private estudianteService: EstudianteArrService) {}

  filtrar(event: Event) {
    let word = (event.target as HTMLInputElement).value;

    this.estudianteService.filtrarEstudiante(word);
  }
}
