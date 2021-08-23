import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-svg',
  templateUrl: './chat-svg.component.html',
  styleUrls: ['../../../expert/expertModal/expertModal.scss']
})
export class ChatSvgComponent implements OnInit {
  @Input() cssClass?:string
  constructor() { }

  ngOnInit(): void {
  }

}
