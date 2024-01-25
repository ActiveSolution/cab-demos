import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveLabsComponent } from './directive-labs.component';

describe('DirectiveLabsComponent', () => {
  let component: DirectiveLabsComponent;
  let fixture: ComponentFixture<DirectiveLabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveLabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectiveLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
