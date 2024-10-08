import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent {
  @Input() nombre: string = '';
  @Input() apellido: string = '';
  @Input() ciudad: string = '';
  @Input() numeroJugado: string = '';
}
