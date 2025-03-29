import { Directive } from '@angular/core';

@Directive({
  selector: '[appNumber]',
  standalone: true
})
export class NumberDirective {

  constructor() { }

}
