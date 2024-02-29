import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentUnitTestingComponent } from './component-unit-testing.component';

describe('ComponentUnitTestingComponent', () => {
  let component: ComponentUnitTestingComponent;
  let fixture: ComponentFixture<ComponentUnitTestingComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({})
    
    fixture = TestBed.createComponent(ComponentUnitTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
