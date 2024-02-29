import { Component, Input } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-one',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './page-one.component.html',
  styleUrl: './page-one.component.css'
})
export class PageOneComponent {
  constructor(private router: Router, private route: ActivatedRoute){}

  @Input() title: string = '';
  @Input() id: string = '';

  ngOnInit() {
    console.log('PageOneComponent ngOnInit', this.id, this.title);
  }

  onNavigate() {
    this.router.navigate(['two'], { relativeTo: this.route});
  }
}
