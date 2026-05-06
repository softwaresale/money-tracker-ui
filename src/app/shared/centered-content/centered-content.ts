import { Directive } from '@angular/core';

@Directive({
  selector: 'div[appCenteredContentContainer]',
  host: {
    'class': 'grid grid-cols-1 md:grid-cols-12'
  }
})
export class CenteredContentContainer {}

@Directive({
  selector: 'div[appCenteredContent]',
  host: {
    'class': 'col-span-full md:col-start-4 md:col-end-10'
  }
})
export class CenteredContent {

  constructor() { }

}