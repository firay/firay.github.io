import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from "@angular/core";

@Directive({
  selector: '[toggle]'
})

export class ToggleDirective {
  @HostBinding('class.show') isOpen = false;

  @HostListener('click', ["$event"]) toggleOpen(){
      this.isOpen = !this.isOpen
  }
  constructor(private elRef: ElementRef) {}

  @HostListener('document:click', ['$event']) onClick(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.isOpen = false
      this.elRef.nativeElement.children[1].classList.remove('nav-container__sing-up__select--open')
    }
    if (this.isOpen){
      this.elRef.nativeElement.children[1].classList.add('nav-container__sing-up__select--open')
    }else {
      this.elRef.nativeElement.children[1].classList.remove('nav-container__sing-up__select--open')
    }
  }
}
