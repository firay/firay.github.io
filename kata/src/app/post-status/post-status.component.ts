import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-status',
  templateUrl: './post-status.component.html',
  styleUrls: ['./post-status.component.scss'],

})
export class PostStatusComponent implements OnInit {
  constructor() { }
  @Input() postStatus:boolean = false

  ngOnInit(): void {
  }
}
