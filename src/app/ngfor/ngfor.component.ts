import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { SingletonService } from '../singleton.service';

@Component({
  selector: 'app-ngfor',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgforComponent {
  demoItems: string[] = ['item1', 'item2', 'item3'];

  constructor(public service: SingletonService) {}
}
