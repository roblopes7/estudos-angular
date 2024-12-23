import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForEmptyComponent } from './for-empty.component';

describe('ForEmptyComponent', () => {
  let component: ForEmptyComponent;
  let fixture: ComponentFixture<ForEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForEmptyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
