import {Component, OnInit,} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormShowServices} from "../../shared/services/formShow.services";
import {HttpClient} from "@angular/common/http";
import {authServices} from "../../shared/services/auth.services";


@Component({
  selector: 'app-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../form.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup | any
  user={
    password:'',
    email:""
  }
  public userStatus: boolean = false;
  constructor(private formLoginServices: FormShowServices,
              private http: HttpClient,
              private authServices:authServices,
  ) {

  }
  onSubmit(e:any) {
    this.user ={
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,
    }
    this.authServices.login(this.user.email,this.user.password).subscribe(resp=>{
      this.formLoginServices.checkIsShowForm.emit(false)
    })
  }

  closeLoginForm(e: any) {
    this.formLoginServices.closeForm(e, 'login')
  }

  showSingUpForm(e: any) {
    this.formLoginServices.closeForm(e, 'login')
    this.formLoginServices.showForm(true, 'singUp')
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })
    this.formLoginServices.getShow('login')
  }
}
