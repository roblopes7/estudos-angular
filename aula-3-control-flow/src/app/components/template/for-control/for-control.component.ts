import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-for-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './for-control.component.html',
  styleUrl: './for-control.component.scss'
})
export class ForControlComponent {

  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(3000));

  trackByFn(index: number) {
    return index;
  }
}
