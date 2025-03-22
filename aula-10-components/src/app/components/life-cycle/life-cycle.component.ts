import { AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, signal, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss'
})
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck, AfterViewInit{


  @Input() public myNumber = 0;
  public myText = signal('Pachinko');

  constructor(private fb: FormBuilder){}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
    if(changes['myNumber'].previousValue === 2) {
      alert('Passou pelo 2');
    }
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  @ViewChild('content') public content!: ElementRef;
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.content.nativeElement.innerText);
  }

}
