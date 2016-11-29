import { Directive } from '@angular/core';

/*
  Generated class for the HideHeader directive.

  See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
@Directive({
  selector: '[hide-header]' // Attribute selector
})
export class HideHeader {

  constructor() {
    console.log('Hello HideHeader Directive');
  }

}
