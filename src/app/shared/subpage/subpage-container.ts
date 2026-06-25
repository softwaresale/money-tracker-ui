import { Directive } from '@angular/core';

@Directive({
  selector: 'div[appSubpageContainer]',
  host: {
    class: 'flex flex-col gap-4 mt-2'
  }
})
export class SubpageContainer {

  constructor() { }

}
