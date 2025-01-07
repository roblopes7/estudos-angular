import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-computed',
  standalone: true,
  imports: [],
  templateUrl: './computed.component.html',
  styleUrl: './computed.component.scss',
})
export class ComputedComponent {
  public array = signal(['Banana']);

  addFruit(value: string) {
    this.array.update( (oldValues: Array<string>) => {
      return [...oldValues, value]
    })
  }
}
