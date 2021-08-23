import {Component, ElementRef, OnDestroy, OnInit, ViewChild,} from '@angular/core';
import {FormShowServices} from "../shared/services/formShow.services";
import {FavouriteServices} from "../shared/services/favourite.services";
import {Subscription} from "rxjs";
import {authServices} from "../shared/services/auth.services";
import {trigger, state, style, animate, transition,} from "@angular/animations";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('divState', [
      state('normal', style({
        transform: 'translateX(0)'
      })),
      state('firstStep', style({
        transform: 'translateX(10px)'
      })),
      state('secondStep', style({
        transform: 'translateX(-10px)'
      })),
      transition('normal <=> firstStep', animate(1000)),
      transition('firstStep <=> secondStep', animate(1000)),
      transition('secondStep <=>normal', animate(1000))
    ])]
})
export class NavComponent implements OnInit, OnDestroy {
  public counter: number | null = 0
  public changeCounter = new Subscription()
  public userSub = new Subscription()
  public isShowFav: boolean = false
  public state = 'normal';
  @ViewChild('nav') nav?:ElementRef

  constructor(private formLogin: FormShowServices,
              private favServices: FavouriteServices,
              private authServices: authServices) {
  }

  hideMenu(event:any, nav:HTMLElement){
    if (event.target.classList.contains('nav-container--show')){
      if (nav.classList.contains('nav-container--show')){
        nav.classList.remove('nav-container--show')
      }
    }
  }
  ngOnInit(): void {
    this.counter = this.favServices.getCounter()
    this.changeCounter = this.favServices.favouriteItemsChange.subscribe(counter => {
      this.counter = counter !== 0 ? counter : null
      this.showSpan()
    })
    this.userSub = this.authServices.user.subscribe((resp: any) => {
      if (resp !== null) {
        this.showSpan()
        this.isShowFav = resp.isRegistered
      }
    });
  }

  showSpan() {
    setTimeout(()=>{this.state = 'firstStep'},200)
    setTimeout(()=>{this.state = 'secondStep'},300)
    setTimeout(()=>{this.state = 'normal'},400)
  }

  showFormLogin(flag: boolean) {
    this.formLogin.checkIsShowForm.emit(flag)
    this.formLogin.showForm(flag, 'login')
  }

  showFormSingUp(flag: boolean) {
    this.formLogin.chekIsShowSingUp.emit(flag)
    this.formLogin.showForm(flag, 'singUp')
  }
  hideMenuLink(e:any,navContainer:HTMLElement){
    console.log(navContainer);
    if (navContainer.classList.contains('nav-container--show')){
      navContainer.classList.remove('nav-container--show')
    }
  }
  ngOnDestroy() {
    this.userSub.unsubscribe()
    this.changeCounter.unsubscribe()
  }
}
