import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Curso Angular</h1>
    <h2>Rotas</h2>

    <router-outlet></router-outlet>
  `

})
export class AppComponent {
  title = 'aula-12-rotas';
}
