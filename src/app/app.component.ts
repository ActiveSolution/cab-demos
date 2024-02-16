import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { DirectiveLabsComponent } from './directive-labs/directive-labs.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { RxJsOperatorsComponent } from './rx-js-operators/rx-js-operators.component';
import { NgRxLabsComponent } from './ng-rx-labs/ng-rx-labs.component';
import { RxJsMapsComponent } from './rx-js-maps/rx-js-maps.component';
import { HttpComponent } from './http/http.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgifComponent, NgforComponent, DirectiveLabsComponent, EventBindingComponent, RxJsOperatorsComponent, NgRxLabsComponent, RxJsMapsComponent, HttpComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cab-demo-space';

  constructor(private router: Router){}

  onNavigate() {
    this.router.navigate(['/one']);
  }
}
