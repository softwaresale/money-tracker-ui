import { Directive } from '@angular/core';

@Directive({
  selector: '[appBasePage]',
  host: {
    class: 'flex flex-col gap-4 p-4'
  }
})
export class BasePage {

  constructor() { }

}
