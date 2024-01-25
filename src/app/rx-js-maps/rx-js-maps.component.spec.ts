import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsMapsComponent } from './rx-js-maps.component';

describe('RxJsMapsComponent', () => {
  let component: RxJsMapsComponent;
  let fixture: ComponentFixture<RxJsMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxJsMapsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RxJsMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
