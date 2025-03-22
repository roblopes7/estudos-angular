import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { HostElementsComponent } from "./components/host-elements/host-elements.component";
import { LifeCycleComponent } from "./components/life-cycle/life-cycle.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentComponent, HostElementsComponent, LifeCycleComponent],
  template: `
    <h1>Curso Angular</h1>

    <!-- <app-host-elements> -->
      <app-life-cycle [myNumber]="number"/>

  `,
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    // setInterval( () => {
    //   this.number++;
    // }, 1000);
  }

  title = 'aula-10-components';

  public number = 1;

}
