import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-balota',
  templateUrl: './balota.component.html',
  styleUrl: './balota.component.css'
})
export class BalotaComponent {

  @Input ()
  valor : number =0;

  
}
