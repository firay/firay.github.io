import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-facebook-svg',
  templateUrl: './facebook-svg.component.html',
  styleUrls: ['../../../expert/expertModal/expertModal.scss']
})
export class FacebookSvgComponent implements OnInit {
  @Input() cssClass?:string
  constructor() { }

  ngOnInit(): void {
  }

}
