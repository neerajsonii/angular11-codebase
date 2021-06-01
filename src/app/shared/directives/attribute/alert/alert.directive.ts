import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

// its a attribute directive which is used to changes the appearance and the behavior of DOM

@Directive({  
  selector: '[appAlert]'
})
export class AlertDirective implements OnInit {

  @Input("error") error: string = null;
  @HostBinding("title") title: string = null;

  constructor(
    private hostElementRef: ElementRef,
    private renderer2: Renderer2) {   // renderer2 is a services provided by Angualr to create and render the DOM elements programatically so can be unit testable;
    console.log('appAlert directive executed');
  }

  divElement: Document;
  spanElement: Document;
  spanText: string;
  
  ngOnInit(): void {
    // this.createRenderDomUsingHtml();
    this.createRenderDomUsingRenderer2(); // preferred way using renderer2
    console.log('Host Element > ', this.hostElementRef.nativeElement);
  }

  createRenderDomUsingRenderer2(): void { 
    this.divElement = this.renderer2.createElement('div'); // <div></div>
    this.renderer2.setAttribute(this.divElement, "role", "alert");  // <div role="alert"></div>
    this.renderer2.setAttribute(this.divElement, "class", "alert alert-danger fade show");  // <div role="alert" class="alert alert-danger fade show"></div>
    this.renderer2.setStyle(this.divElement, "transition", "transform 0.5s");  // <div role="alert" class="alert alert-danger fade show"style="transition: transform 0.5s" ></div>
    
    this.spanElement = this.renderer2.createElement('span'); // <span></span>
    this.renderer2.setAttribute(this.spanElement, "class", "message"); // <span class="message"></span>

    this.spanText = this.renderer2.createText(this.error);
    this.renderer2.appendChild(this.spanElement, this.spanText);

    this.renderer2.appendChild(this.divElement, this.spanElement);

    this.hostElementRef.nativeElement.appendChild(this.divElement);
    this.title = 'Please try again';
  }

  createRenderDomUsingHtml() { 
    this.hostElementRef.nativeElement.innerHTML = `
    <div class="alert alert-danger fade show" role="alert" style="transition: transform 0.5s"><span>${this.error}</span></div>`;
    this.title = 'Please try again';
  }

  @HostListener('click', ["$event"])
  onHostClicked(event: Event): void { 
    console.log('onHostClicked', event);
  }
  
  @HostListener('mouseenter', ["$event"])
  onHostMouseEnter(event: Event): void { 
    // this.hostElementRef.nativeElement.querySelector('.alert').style.transform = "scale(1.05)";
    this.renderer2.setStyle(this.divElement, "transform", "scale(1.05)");
  }
  
  @HostListener('mouseleave', ["$event"])
  onHostMouseLeave(event: Event): void { 
    // this.hostElementRef.nativeElement.querySelector('.alert').style.transform = "scale(1)";
    this.renderer2.setStyle(this.divElement, "transform", "scale(1)");
  }
}
