import { Component, Output, EventEmitter } from '@angular/core';
import { SingletonService } from '../singleton.service';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  onClick(): void {
    alert('click');
  }
}
