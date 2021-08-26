import {Component, OnDestroy, OnInit} from '@angular/core';
import {authServices} from "../shared/services/auth.services";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit, OnDestroy {
  public fetchStatus:boolean = false
  private subFetchStatus = new Subscription()

  constructor(private authServices: authServices) {
  }

  ngOnInit(): void {
    const  successNumber = this.authServices.creatSomeRandom(1, 3)
    this.authServices.putData(successNumber)
    this.authServices.getSuccessStatus()
    this.subFetchStatus = this.authServices.subSuccessPost.subscribe(resp=>{
      this.fetchStatus = resp
    })
  }
  ngOnDestroy() {
    this.subFetchStatus.unsubscribe()
    clearInterval(this.authServices.timer)
  }

}
