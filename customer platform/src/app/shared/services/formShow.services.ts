import {Injectable, EventEmitter} from "@angular/core";


@Injectable({
  providedIn: "root",
})

export class FormShowServices {

  private isShowLogin: boolean = false
  private isShowSingUp: boolean = false

  public checkIsShowForm = new EventEmitter<boolean>()
  public chekIsShowSingUp = new EventEmitter<boolean>()

  closeForm(e: any, whichForm: string) {
    e.preventDefault()
    if (e.currentTarget.classList.contains('btn') || e.target.classList.contains('modal-wrapper')) {
      if ( whichForm === "login"){
        this.isShowLogin = false
        this.checkIsShowForm.emit(false)
      }else{
        this.isShowSingUp = false
        this.chekIsShowSingUp.emit(false)
      }
    }
  }

  showForm(flag: boolean, whichForm: string) {
    if (whichForm === "login"){
      this.isShowLogin = flag
      this.checkIsShowForm.emit(flag)
    } if (whichForm === 'singUp') {
      this.isShowSingUp = flag
      this.chekIsShowSingUp.emit(flag)
    }
  }

  getShow(whichForm: string) {
    if (whichForm == "login") {
      return this.isShowLogin
    }
    if (whichForm === "singUp") {
      return this.isShowSingUp
    }
    return null
  }
}
