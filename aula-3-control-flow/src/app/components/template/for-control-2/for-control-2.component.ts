import { Component } from '@angular/core';

@Component({
  selector: 'app-for-control-2',
  standalone: true,
  imports: [],
  templateUrl: './for-control-2.component.html',
  styleUrl: './for-control-2.component.scss'
})
export class ForControl2Component {

  public peoples = [{name: 'Robson'}];

  addNewPeople(value: string) {
    return this.peoples.push({name: value});
  }
}
