import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForControl2Component } from './for-control-2.component';

describe('ForControl2Component', () => {
  let component: ForControl2Component;
  let fixture: ComponentFixture<ForControl2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForControl2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForControl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
