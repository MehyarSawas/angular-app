import {Directive, ViewContainerRef} from '@angular/core';

/**
 * help to get the view container reference of the host element for the generic component
 */
@Directive({
  selector: '[mComponentHost]'
})
export class ComponentHostDirective {

  constructor(public vcRef: ViewContainerRef) {
  }
}
