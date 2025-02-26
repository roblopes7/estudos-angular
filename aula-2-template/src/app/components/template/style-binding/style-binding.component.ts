import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  standalone: true,
  imports: [],
  templateUrl: './style-binding.component.html',
  styleUrl: './style-binding.component.scss'
})
export class StyleBindingComponent {

  public name = 'Angular Style Test';
  public isTextDecoration = this.name.length > 10 ? 'underline' : 'none';
}
