import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-close-svg',
  templateUrl: './close-svg.component.html',
  styles:[`
    .close-svg{
      width: 100%;
      height: 100%;
      fill: #404040;
      stroke: #404040;
    }`]
})
export class CloseSvgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
