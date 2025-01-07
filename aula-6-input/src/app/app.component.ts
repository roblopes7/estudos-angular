import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaiOuMaeComponent } from "./components/comunicacao/pai-ou-mae/pai-ou-mae.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaiOuMaeComponent],
  template: `
  <app-pai-ou-mae />
  `
})
export class AppComponent {
  title = 'aula-6-input';
}
