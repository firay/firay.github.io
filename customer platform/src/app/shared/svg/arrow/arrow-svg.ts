import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector:'app-arrow-svg',
  templateUrl:'./arrow-svg.html',
  styleUrls:['./arrow-svg.scss']
})

export class ArrowSvg implements  OnInit{
  @Input() cssClass: any
  ngOnInit() {
  }
}
