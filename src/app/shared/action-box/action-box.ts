import { Directive } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';

@Directive({
  selector: 'div[appActionBox]',
  host: {
    class: "flex flex-col sm:flex-row gap-1"
  }
})
export class ActionBox {

  constructor() { }

}

@Directive({
  selector: 'button,a[appActionBoxAction]',
  host: {
    class: "flex-1"
  },
  hostDirectives: []
})
export class ActionBoxAction {

  constructor() { }

}
