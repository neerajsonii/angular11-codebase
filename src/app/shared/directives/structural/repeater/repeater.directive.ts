import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

// its a structural directive which is used to addition or deletion of DOM elements

@Directive({
  selector: '[appRepeater]'
})
export class RepeaterDirective implements OnInit {

  @Input("appRepeater") repeater: number;

  constructor(
    private viewContainerRef: ViewContainerRef,  // to accessing child view reference
    private templateRef: TemplateRef<any>) {  // 
    this.viewContainerRef.clear();
    console.log('appRepeater directive executed');
  }

  ngOnInit(): void { 
    for (let i = 0; i < this.repeater; i++) { 
      this.viewContainerRef.createEmbeddedView(this.templateRef, { $implicit: i });
    }
  }

}
