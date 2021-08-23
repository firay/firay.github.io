import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    document.body.style.overflow = 'hidden'
  }
  ngOnDestroy() {
    document.body.style.overflow = 'auto'
  }

}
