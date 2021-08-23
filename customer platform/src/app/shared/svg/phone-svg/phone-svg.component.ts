import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-phone-svg',
  templateUrl: './phone-svg.component.html',
  styleUrls: ['../../../expert/expertModal/expertModal.scss']
})
export class PhoneSvgComponent implements OnInit {
  @Input() cssClass?:string
  constructor() { }

  ngOnInit(): void {
  }

}
