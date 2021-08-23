import {Component, OnInit} from '@angular/core';
import {FormShowServices} from "../../shared/services/formShow.services";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {authServices} from "../../shared/services/auth.services";


@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['../form.scss'],
})
export class SingUpComponent implements OnInit {
  public singUp!: FormGroup |any
  formInit: boolean = false
  public passwordValue:string =" "
  public confirmPassword :string =" "

  public user:any = {
    name:"",
    email:"",
    password:""
  }


  constructor(private formLogin: FormShowServices,
              private http:HttpClient,
              private authServices:authServices,
              private formLoginServices:FormShowServices) {
    this.singUp = new FormGroup({
      userName: new FormControl(null, ([Validators.required, Validators.minLength(4)])),
      email: new FormControl(null, ([Validators.required, Validators.email])),
      password: new FormControl(null, ([Validators.required,Validators.minLength(6), this.checkPassword.bind(this)])),
      confirmPassword: new FormControl(null, [Validators.required, this.checkConfirmPassword.bind(this)]),
    })
  }

  onSubmit() {
    this.user = {
      name:this.singUp.controls.userName.value,
      password:this.singUp.controls.password.value,
      email:this.singUp.controls.email.value,
    }

    this.authServices.singUp(this.user.email, this.user.password).subscribe()

  }
  checkPassword(control:FormControl):{ [s:string]:boolean  } | null{
        this.passwordValue = control.value
      if (control.touched && this.confirmPassword !== this.passwordValue){
        this.singUp.controls.confirmPassword.setErrors({passwordMisMatch:true})
      }
      if (control.touched && this.confirmPassword === this.passwordValue){
        this.singUp.controls.confirmPassword.setErrors(null)
        return  null
      }
    return null
  }
  checkConfirmPassword(control: FormControl): { [s:string]:boolean  } | null {
    if (this.formInit) {
        this.confirmPassword = control.value
        if (this.confirmPassword !== this.passwordValue){
          return {missPassword:true}
        }
        if (this.confirmPassword === this.passwordValue && this.singUp.controls.password.valid){
          this.singUp.controls.password.setErrors(null)
          return null
        }
    }
    return  null
  }

  closeLoginForm(e: any) {
    this.formLogin.closeForm(e, 'singUp')
    this.formLogin.chekIsShowSingUp.emit(false)
  }
  showLogInForm(e: any) {
    this.formLoginServices.closeForm(e, 'singUp')
    this.formLoginServices.showForm(true, 'login')
  }
  ngOnInit() {
    this.formLogin.getShow('singUp')
    this.formInit = true
  }
}
