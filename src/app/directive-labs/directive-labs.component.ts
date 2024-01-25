import { Component } from '@angular/core';
import { SingletonService } from '../singleton.service';
import { AlertDirective } from '../alert.directive';

@Component({
  selector: 'app-directive-labs',
  standalone: true,
  imports: [AlertDirective],
  templateUrl: './directive-labs.component.html',
  styleUrl: './directive-labs.component.css'
})
export class DirectiveLabsComponent {
}
