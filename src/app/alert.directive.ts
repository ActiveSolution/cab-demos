import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAlert]',
  standalone: true
})
export class AlertDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.color = 'red';
   }

}
