import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeferrableViewComponent } from "./components/template/deferrable-view/deferrable-view.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeferrableViewComponent],
  template: `
  <h1>Curso Angular</h1>
  <app-deferrable-view/>
  `
})
export class AppComponent {
  title = 'aula-4-deferrable-view';
}
