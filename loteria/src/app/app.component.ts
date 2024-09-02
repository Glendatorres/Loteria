import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loteria';

  number1: number;
  number2: number;
  number3: number;
  number4: number;
  numberWin: string;
  jugadores: Array<{ nombre: string, apellido: string, ciudad:string, numeroJugado: string }> = [];
  ganadores: string[] = [];
  showSerpentinas: boolean = false;

  constructor() {
    this.number1 = 0;
    this.number2 = 0;
    this.number3 = 0;
    this.number4 = 0;
    this.numberWin = '';

    // Definir jugadores
    this.jugadores = [
      { nombre: 'Carlos', apellido: 'García', 'ciudad':'cali', numeroJugado: '9012' },
      { nombre: 'Juan', apellido: 'Pérez', 'ciudad':'bogota', numeroJugado: '1234' },
      { nombre: 'María', apellido: 'López','ciudad':'vayedupar', numeroJugado: '5678' },
      { nombre: 'Ana', apellido: 'Martínez','ciudad':'cartagena', numeroJugado: '3456' },
      { nombre: 'José', apellido: 'Rodríguez', 'ciudad':'buenaventura',numeroJugado: '7890' },
      { 'nombre': 'Carlos', 'apellido': 'García','ciudad':'cesar', 'numeroJugado': '9012' },
      { 'nombre': 'Juan', 'apellido': 'Pérez', 'ciudad':'tulua','numeroJugado': '1234' },
      { 'nombre': 'María', 'apellido': 'López', 'ciudad':'pasto','numeroJugado': '5678' },
      { 'nombre': 'Ana', 'apellido': 'Martínez', 'ciudad':'cordoba','numeroJugado': '3456' },
      { 'nombre': 'José', 'apellido': 'Rodríguez', 'ciudad': 'Manizales','numeroJugado': '7890' },
      { 'nombre': 'Luis', 'apellido': 'Gómez', 'ciudad': 'Ibagué','numeroJugado': '2345' },
      { 'nombre': 'Lucía', 'apellido': 'Fernández', 'ciudad': 'Bucaramanga','numeroJugado': '6789' },
      { 'nombre': 'Elena', 'apellido': 'Torres', 'ciudad': 'Medellín','numeroJugado': '1239' },
      { 'nombre': 'Miguel', 'apellido': 'Sánchez', 'ciudad': 'Cartagena','numeroJugado': '3457' },
      { 'nombre': 'Carmen', 'apellido': 'Ramírez', 'ciudad': 'Cartagena','numeroJugado': '7891' },
      { 'nombre': 'Pedro', 'apellido': 'Ruiz', 'ciudad': 'Barranquilla','numeroJugado': '2346' },
      { 'nombre': 'Laura', 'apellido': 'Hernández', 'ciudad': 'corazal','numeroJugado': '6790' },
      { 'nombre': 'David', 'apellido': 'Moreno', 'ciudad': 'san andres','numeroJugado': '1240' },
      { 'nombre': 'Sara', 'apellido': 'Jiménez', 'ciudad': 'pamplona','numeroJugado': '3468' },
      { 'nombre': 'Sofía', 'apellido': 'Vega', 'ciudad': 'guajira','numeroJugado': '7901' },
      { 'nombre': 'Daniel', 'apellido': 'Silva', 'ciudad': 'casanare','numeroJugado': '2357' },
      { 'nombre': 'Patricia', 'apellido': 'Ortiz', 'ciudad': '','numeroJugado': '6802' },
      { 'nombre': 'Raúl', 'apellido': 'Iglesias', 'ciudad': 'Barranquilla','numeroJugado': '1251' },
      { 'nombre': 'Nuria', 'apellido': 'Navarro', 'ciudad': 'aguachica','numeroJugado': '3479' },
      { 'nombre': 'Javier', 'apellido': 'Lara', 'ciudad': 'caseres','numeroJugado': '7912' },
      { 'nombre': 'Rocío', 'apellido': 'Guerrero', 'ciudad': 'cauca','numeroJugado': '2368' },
      { 'nombre': 'Marta', 'apellido': 'Molina', 'ciudad': 'espinal','numeroJugado': '6813' },
      { 'nombre': 'Alberto', 'apellido': 'Garrido', 'ciudad': 'malpelo','numeroJugado': '1267' },
      { 'nombre': 'Cristina', 'apellido': 'Cruz', 'ciudad': 'envigado','numeroJugado': '3490' },
      { 'nombre': 'Antonio', 'apellido': 'Santos', 'ciudad': 'cartago','numeroJugado': '7923' },
      { 'nombre': 'Isabel', 'apellido': 'Rey', 'ciudad': 'medellin','numeroJugado': '2389' },
      { 'nombre': 'Jorge', 'apellido': 'Pardo', 'ciudad': 'mesitas','numeroJugado': '6834' },
      { 'nombre': 'Beatriz', 'apellido': 'Vargas', 'ciudad': 'neiva','numeroJugado': '1278' },
      { 'nombre': 'Eva', 'apellido': 'Aguilar', 'ciudad': 'tulua','numeroJugado': '3501' },
      { 'nombre': 'Manuel', 'apellido': 'Mora', 'ciudad': 'casanare','numeroJugado': '7934' },
      { 'nombre': 'Silvia', 'apellido': 'Giménez', 'ciudad': 'Barranquilla','numeroJugado': '2390' },
      { 'nombre': 'Francisco', 'apellido': 'Ortega', 'ciudad': 'leticia','numeroJugado': '6845' },
      { 'nombre': 'Celia', 'apellido': 'Cano', 'ciudad': 'pereira','numeroJugado': '1289' },
      { 'nombre': 'Rubén', 'apellido': 'Guerra', 'ciudad': 'Manizales','numeroJugado': '3512' },
      { 'nombre': 'Lorena', 'apellido': 'Paz', 'ciudad': 'Ibagué','numeroJugado': '7945' },
      { 'nombre': 'Sergio', 'apellido': 'Rojas','ciudad': 'Santa Marta','numeroJugado': '2401' },
      { 'nombre': 'Alicia', 'apellido': 'Luna', 'ciudad': 'Medellín','numeroJugado': '6856' },
      { 'nombre': 'Víctor', 'apellido': 'Góngora', 'ciudad': 'Bogotá','numeroJugado': '1290' },
      { 'nombre': 'Marina', 'apellido': 'Vera', 'ciudad':'pereira','numeroJugado': '3523' },
      { 'nombre': 'Pablo', 'apellido': 'López', 'ciudad':'puerto carreño','numeroJugado': '7956' },
      { 'nombre': 'Natalia', 'apellido': 'Ríos', 'ciudad':'tunja','numeroJugado': '2413' },
      { 'nombre': 'Joaquín', 'apellido': 'Soto', 'ciudad':'sutamarchan','numeroJugado': '6879' },
      { 'nombre': 'Gloria', 'apellido': 'Moya', 'ciudad':'tulua','numeroJugado': '1301' },
      { 'nombre': 'Fernando', 'apellido': 'Paz', 'ciudad':'santander','numeroJugado': '3534' },
      { 'nombre': 'Mónica', 'apellido': 'Aguirre','ciudad':'huila', 'numeroJugado': '7967' },
      { 'nombre': 'Rosa', 'apellido': 'Gómez', 'ciudad':'villavicencio','numeroJugado': '2423' },
      { 'nombre': 'Alberto', 'apellido': 'Castañeda', 'ciudad':'chcó','numeroJugado': '6890' },
      { 'nombre': 'Elena', 'apellido': 'Santana', 'ciudad':'cucuta','numeroJugado': '1312' },
      { 'nombre': 'Manuel', 'apellido': 'Garrido', 'ciudad':'leticia','numeroJugado': '3545' },

    ];
  }

  getNumberPlaying(): number {
    let myNumber: number;
    myNumber = (Math.trunc(Math.random() * 9) - 1) + (1);
    if (myNumber < 0) myNumber = 0;
    return myNumber;
  }

  playLotery(): void {
    this.number1 = this.getNumberPlaying();
    this.number2 = this.getNumberPlaying();
    this.number3 = this.getNumberPlaying();
    this.number4 = this.getNumberPlaying();
    this.numberWin = `El número ganador es: ${this.number1}${this.number2}${this.number3}${this.number4}`;

    this.identificarGanadores();
  }

  identificarGanadores(): void {
    const numeroGanador = `${this.number3}${this.number4}`;
    this.ganadores = this.jugadores
      .filter(jugador => jugador.numeroJugado.endsWith(numeroGanador))
      .map(jugador => `${jugador.nombre} ${jugador.apellido} ${jugador.ciudad}`);

    if (this.ganadores.length > 0) {
      this.showSerpentinas = true;
      setTimeout(() => this.showSerpentinas = false, 10000); 
    }
    
  }
  getRandomColor(): string {
    const letters = 'GANASTE ERES EL MEJOR';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
}
