import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlFlowComponent } from './components/template/control-flow/control-flow.component';
import { ForControlComponent } from "./components/template/for-control/for-control.component";
import { ForControl2Component } from "./components/template/for-control-2/for-control-2.component";
import { ForEmptyComponent } from "./components/template/for-empty/for-empty.component";
import { SwitchComponent } from "./components/template/switch/switch.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ControlFlowComponent,
    ForControlComponent,
    ForControl2Component,
    ForEmptyComponent,
    SwitchComponent
],
  template: `
  <h1> Curso Angular </h1>
  <!-- <app-control-flow/> -->
  <!-- <app-for-control/> -->
  <!-- <app-for-control-2 /> -->
  <!-- <app-for-empty/> -->
   <app-switch />
  `
})
export class AppComponent {
  title = 'aula-3-control-flow';
}
