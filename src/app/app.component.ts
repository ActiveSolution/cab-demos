import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { DirectiveLabsComponent } from './directive-labs/directive-labs.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { RxJsOperatorsComponent } from './rx-js-operators/rx-js-operators.component';
import { NgRxLabsComponent } from './ng-rx-labs/ng-rx-labs.component';
import { RxJsMapsComponent } from './rx-js-maps/rx-js-maps.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterOutlet, NgifComponent, NgforComponent, DirectiveLabsComponent, EventBindingComponent, RxJsOperatorsComponent, NgRxLabsComponent, RxJsMapsComponent],
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
