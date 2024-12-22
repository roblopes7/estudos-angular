import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attribute-binding.component.html',
  styleUrl: './attribute-binding.component.scss'
})
export class AttributeBindingComponent {

  public name = "Angular Test";
}
