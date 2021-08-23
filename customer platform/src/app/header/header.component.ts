import {Component, ElementRef, OnInit,} from '@angular/core';
import {FormShowServices} from "../shared/services/formShow.services";
import {NavComponent} from "../nav/nav.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  public isShowLogin: any
  public isShowSingUp: boolean | undefined

  constructor(private showFormServices: FormShowServices) {
  }
  closeLogin(e:any){
    if (e.target.classList.contains('modal-wrapper')){
        this.isShowLogin = false
    }
  }
  closeSingUp(e:any){
    if (e.target.classList.contains('modal-wrapper')){
      this.isShowSingUp = false
    }
  }
  showMobileNav(event:Event,btn:HTMLElement,nav:NavComponent){
    nav.nav?.nativeElement.classList.add('nav-container--show')
  }
  ngOnInit() {
    this.showFormServices.checkIsShowForm.subscribe((flag) => this.isShowLogin = flag)
    this.showFormServices.chekIsShowSingUp.subscribe((flag) => this.isShowSingUp = flag)
  }
}
