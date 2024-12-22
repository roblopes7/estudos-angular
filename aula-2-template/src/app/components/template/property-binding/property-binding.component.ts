import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.scss'
})
export class PropertyBindingComponent {

  public isDisabled = false;
  public srcImage = 'https://s3.amazonaws.com/angularminds.com/new-blog-images/angular-wordmark-gradient.png';
  public altImage = 'Angular logo';
}
