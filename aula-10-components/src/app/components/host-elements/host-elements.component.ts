import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-host-elements',
  standalone: true,
  imports: [],
  templateUrl: './host-elements.component.html',
  styleUrl: './host-elements.component.scss',
  host: {

  }
})
export class HostElementsComponent implements OnChanges{

  @Input() public myNumber = 0;

  constructor(private fb: FormBuilder){}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

}
