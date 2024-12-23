import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForControlComponent } from './for-control.component';

describe('ForControlComponent', () => {
  let component: ForControlComponent;
  let fixture: ComponentFixture<ForControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
