import { Component } from '@angular/core';
import { ReactiveFormsComponent } from "./components/reactive-forms/reactive-forms.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsComponent],
  template: `
  <h1>Curso Angular</h1>
  <h2>Reactive Forms</h2>

  <app-reactive-forms />
  `
})
export class AppComponent {
  title = 'aula-9-reactive-forms';
}
