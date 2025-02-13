import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateDrivenFormComponent } from "./components/template-driven-form/template-driven-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateDrivenFormComponent],
  template: `
  <h1>Curso Angular</h1>
  <h2>Template Driven Forms</h2>

  <app-template-driven-form />
  `
})
export class AppComponent {
  title = 'aula-8-template-driven-forms';
}
