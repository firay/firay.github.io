import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormBecomeServices} from "../../shared/services/formBecome.services";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {GetCardsServices} from "../../shared/services/getCards.services";


@Component({
  selector: 'app-become-expert',
  templateUrl: './become-expert.component.html',
  styleUrls: ['../form.scss', './become-expert.component.scss',],
})

export class BecomeExpertComponent implements OnInit {
  public optionsArr: { name: string }[] = []
  public loading: boolean = false
  public firstScreen: boolean = true
  public expertForm!: FormGroup | any
  private id: string = ''
  public state: string = 'hide'

  constructor(private becomeService: FormBecomeServices,
              private http: HttpClient,
              private router: Router,
              private getCard: GetCardsServices) {
  }

  @ViewChild('chooseAspects') chooseAspects: ElementRef | any;


  ngOnInit() {
    this.expertForm = new FormGroup({
      'firstScreen': new FormGroup({
        'userName': new FormControl(null, [Validators.required, Validators.minLength(5),]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl('', [Validators.required, this.checkPassword.bind(this),Validators.minLength(5)]),
        'confirmPassword': new FormControl('', [Validators.required, this.confirmPassword.bind(this)]),
      }),
      'secondScreen': new FormGroup({
        'profession': new FormControl('Search', [Validators.required, this.getAspects.bind(this)]),
        'professionAspects': new FormControl({
          value: "Search",
          disabled: true
        }, [Validators.required, this.showAspects.bind(this)]),
        'skills': new FormControl(null, [Validators.required, Validators.minLength(20)]),
        'rate': new FormControl(null, [Validators.required, Validators.minLength(1)]),
        'agree': new FormControl(true, [Validators.required, Validators.requiredTrue])
      })
    })
  }


  checkPassword(control: FormControl): { [key: string]: boolean } | null {
    const validationResult = this.becomeService.checkPassword(control, this.expertForm)
    if (this.expertForm !== undefined) {
      console.log(validationResult);
      validationResult ? this.expertForm.get('firstScreen.confirmPassword').setErrors(null) : null
      !validationResult ? this.expertForm.get('firstScreen.confirmPassword').setErrors({passwordMisMatch: true}) : null
    }
    return null
  }

  confirmPassword(control: FormControl): { [name: string]: boolean } | null {
    if (this.expertForm !== undefined) {
      let validationResult = this.becomeService.confirmPassword(control, this.expertForm)
      validationResult ? this.expertForm.get('firstScreen.confirmPassword').setErrors(null) : null
      if (!validationResult) {
        return {passwordMisMatch: true}
      }
    }
    return null
  }

  getAspects(control: FormControl): { [key: string]: boolean } | null {
    if (this.expertForm !== undefined && this.chooseAspects !== undefined) {
      let validationResult = this.becomeService.getAspects(control, this.chooseAspects)
      if (validationResult) {
        this.expertForm.get('secondScreen.professionAspects').enable()
        this.expertForm.get('secondScreen.profession').setErrors(null)
      }
      if (!validationResult) {
        return {noAcceptCategory: true}
      }
      this.expertForm.patchValue({secondScreen: {professionAspects: "Search"}})
    }
    return null
  }

  showAspects(control: FormControl): null {
    if (this.expertForm != undefined && this.chooseAspects !== undefined) {
      let result = this.becomeService.showAspects(control, this.chooseAspects)
      if (result) {
        return null
      }
      if (!result) {
        return null
      }
    }
    return null
  }

  showSecondScreen() {
    if (this.expertForm.controls.firstScreen.status === "VALID") {
      this.firstScreen = !this.firstScreen
    }
  }

  shoeFirstScreen() {
    this.firstScreen = !this.firstScreen
  }

  loadAspectsValue(e: HTMLSelectElement) {
    if (e.value.toLowerCase() === "search") {
      return
    }
    this.loading = true
    this.becomeService.updateData(e.value).subscribe(res => {
      this.optionsArr = res
      this.loading = false
    })
  }

  onSubmit() {
    if (this.expertForm.valid) {
      const expert = {
        name: this.expertForm.get('firstScreen.userName').value,
        email: this.expertForm.get('firstScreen.email').value,
        password: this.expertForm.get('firstScreen.password').value,
        profession: this.expertForm.get('secondScreen.profession').value,
        professionAspects: this.getProfessionAspects(),
        expertDescription: [this.expertForm.get('secondScreen.skills').value],
        rate: this.expertForm.get('secondScreen.rate').value,
      }
      this.http.post('https://firay-5ffdf-default-rtdb.firebaseio.com/expert/.json', expert).subscribe((res: any) => {
        this.id = res.name
        this.router.navigate(['expert', this.id])
        this.getCard.fetchCards().subscribe(resp => this.getCard.expertArr = resp)
      })
    }
  }

  private getProfessionAspects() {
    if (this.chooseAspects !== undefined) {
      const professionAspects = [...this.chooseAspects.nativeElement.children].map((item: any) => {
        return item.textContent
      })
      return professionAspects
    }
    return null
  }

  removeAspects(e: any): { [key: string]: boolean } | null {
    let validationResult = this.becomeService.removeAspects(e, this.chooseAspects)
    if (!validationResult) {
      this.expertForm.get('secondScreen.professionAspects').setErrors({noChooseAspects: true})
    }
    if (validationResult) {
      this.expertForm.get('secondScreen.professionAspects').setErrors(null)
    }
    return null
  }

  testSendBase() {
    const testSend = [
      {name: 'Financial analyst'},
      {name: 'currency tellers'},
      {name: 'cashiers-tellers'},
      {name: 'Service specialists'},
      {name: 'credit counselors'},
      {name: 'loan officers'},
      {name: 'credit brokers'},
      {name: 'clearing specialist'},
    ]
    this.http.post('https://firay-5ffdf-default-rtdb.firebaseio.com/profesionUspect/finance/.json', testSend).subscribe((res) => {

    })

  }
}

