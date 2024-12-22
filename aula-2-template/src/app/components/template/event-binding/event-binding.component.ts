import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.scss',
})
export class EventBindingComponent {
  public cont = 0;

  get evenNumber(): string {
    return `${this.cont} is ${this.cont % 2 == 0 ? '' : 'not'} a even number`;
  }

  sum() {
    this.cont++;
  }

  sub() {
    this.cont--;
  }
}
