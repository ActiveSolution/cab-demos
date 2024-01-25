import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingletonService } from '../singleton.service';

@Component({
  selector: 'app-ngif',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.css'
})
export class NgifComponent {
  value: boolean = true;

  constructor(public service: SingletonService) {

  }
}
