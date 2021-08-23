import {Component, Input} from "@angular/core";

@Component({
  selector:'<app-user-photo-svg></app-user-photo-svg>',
  templateUrl:'./userPhotoSvg.html',
  styleUrls:['./userPhotoSvg.scss']
})
export class userPhotoSvg {
  @Input() cssClass :any
  constructor() {
  }
}
