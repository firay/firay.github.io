import {Directive, HostListener} from "@angular/core";

@Directive({
  selector: '[test]'
})
export class RemoveSpan {
 @HostListener('click', ['$event.target'])chek(e:any){
   if (e.tagName.toLowerCase()==="span"){
     e.remove()
   }
 }
}
