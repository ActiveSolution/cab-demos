import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRxLabsComponent } from './ng-rx-labs.component';

describe('NgRxLabsComponent', () => {
  let component: NgRxLabsComponent;
  let fixture: ComponentFixture<NgRxLabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgRxLabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgRxLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
