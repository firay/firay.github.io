import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector:'star-svg',
  templateUrl:'./star.component.html',
  styleUrls:['./star.scss']
})

export class StarComponent implements OnInit{
  @Input() index:any
  @Input() starRate:any
  ngOnInit() {
  }
}
