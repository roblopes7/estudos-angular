import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { PropertyBindingComponent } from './components/template/property-binding/property-binding.component';
import { AttributeBindingComponent } from './components/template/attribute-binding/attribute-binding.component';
import { StyleBindingComponent } from './components/template/style-binding/style-binding.component';
import { EventBindingComponent } from './components/template/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './components/template/two-way-binding/two-way-binding.component';
import { DirectivesComponent } from './components/template/directives/directives.component';
import { TemplateVariablesComponent } from "./components/template/template-variables/template-variables.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    TemplateBindingComponent,
    PropertyBindingComponent,
    AttributeBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    DirectivesComponent,
    TemplateVariablesComponent
],
  template: `
    <h1>Curso de Angular</h1>
    <!-- <app-template-binding /> -->
    <!-- <app-property-binding /> -->
    <!-- <app-attribute-binding/> -->
    <!-- <app-style-binding/> -->
    <!-- <app-event-binding/> -->
    <!-- <app-two-way-binding/> -->
    <!-- <app-directives /> -->
     <app-template-variables />
  `,
})
export class AppComponent {
  title = 'aula-2-template';
}
