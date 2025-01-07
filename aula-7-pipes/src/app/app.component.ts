import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularPipesComponent } from "./components/pipes/angular-pipes/angular-pipes.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AngularPipesComponent],
  template: `
  <h1>Pipes</h1>

  <app-angular-pipes />
  `
})
export class AppComponent {
  title = 'aula-7-pipes';
}
