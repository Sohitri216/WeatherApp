import { Directive, OnInit, ViewContainerRef, TemplateRef, OnChanges, Input } from '@angular/core';

@Directive({
  selector: '[appStructural]'
})
export class StructuralDirective implements OnChanges {

  constructor(private container: ViewContainerRef,
              private template: TemplateRef<any>) { }
  @Input() appStructuralOf: Array<string>;

  ngOnChanges() {
    this.container.clear();
    for (const input of this.appStructuralOf) {
          this.container.createEmbeddedView(this.template,{ $implicit:input});
        }
  }

}
