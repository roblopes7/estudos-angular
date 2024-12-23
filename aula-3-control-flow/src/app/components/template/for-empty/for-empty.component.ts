import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for-empty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './for-empty.component.html',
  styleUrl: './for-empty.component.scss'
})
export class ForEmptyComponent {

  public peoples: Array<{name: string}> = [];

  addNewPeople(value: string) {
    return this.peoples.push({name: value});
  }
}
