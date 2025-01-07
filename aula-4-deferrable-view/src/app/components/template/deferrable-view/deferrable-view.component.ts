import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TestComponent } from '../test-component/test-component.component';

@Component({
  selector: 'app-deferrable-view',
  standalone: true,
  imports: [CommonModule, TestComponent],
  templateUrl: './deferrable-view.component.html',
  styleUrl: './deferrable-view.component.scss'
})
export class DeferrableViewComponent {

}
