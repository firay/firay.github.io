import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gmail-svg',
  templateUrl: './gmail-svg.component.html',
  styleUrls: ['../../../expert/expertModal/expertModal.scss']
})
export class GmailSvgComponent implements OnInit {

  constructor() { }
  @Input() cssClass?:string
  ngOnInit(): void {
  }

}
