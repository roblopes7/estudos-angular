import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsumeServiceComponent } from "./components/consume-service/consume-service.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConsumeServiceComponent],
  template: `
    <h1>Curso Angular</h1>


    <app-consume-service/>
  `
})
export class AppComponent {
  title = 'aula-11-service';
}
