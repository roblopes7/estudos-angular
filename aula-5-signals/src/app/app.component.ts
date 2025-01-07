import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalsComponent } from "./components/template/signals/signals.component";
import { ComputedComponent } from "./components/template/computed/computed.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SignalsComponent, ComputedComponent],
  template: `
  <h1>Curso Angular</h1>
  <app-signals/>
  <app-computed />
  `
})
export class AppComponent {
  title = 'aula-5-signals';
}
