import { Component, computed, Input, input, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent {

  public firstName = signal('Robson');
  public lastName = signal('Lopes');

  public fullName = computed( () => {
    return this.firstName() + this.lastName();
  })

  updateFirstName(value: string) {
    this.firstName.set(value);
  }

  updateLastName(value: string) {
    this.lastName.set(value);
  }
}
