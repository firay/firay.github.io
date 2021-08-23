import {ElementRef, Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs/operators'
import {FormControl, FormGroup} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class FormBecomeServices implements OnInit {
  public expertForm: FormGroup | any
  public addedAspects: any = []

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }


  showAspects(control: FormControl, container: ElementRef) {
    let result
    if (control.value === "Search"){
      this.addedAspects = []
    }
    if (control.value !== 'Search') {
      let addedAspects = !this.addedAspects.includes(control.value)
      this.addedAspects.push(control.value)
      this.addedAspects = [...new Set([...this.addedAspects])]
      if (addedAspects) {
        container.nativeElement.insertAdjacentHTML('afterbegin', `<span class="professionAspects professionAspects--from">${control.value}</span>`)
      }
      if (container.nativeElement.children.length > 0) {
        result = true
      }
      if (container.nativeElement.children.length === 0) {
        result = false
      }
    }
    return result
  }

  getAspects(control: FormControl, container: ElementRef) {
    let result
    let containerChild = [...container.nativeElement.children]
    containerChild.forEach(item => {
      item.remove()
    })
    if (control.value ==="Search") {
      result = false
    }
    if (control.value !== "Search") {
      result = true
    }
    return result
  }

  confirmPassword(control: FormControl, expertForm: FormGroup | any) {
    this.expertForm = expertForm
    let result
    if (control !== undefined) {
      if (this.expertForm !== undefined) {
        let passwordValue = this.expertForm.get('firstScreen.password').value
        if (passwordValue !== control.value ) {
          result = false
        } else if (passwordValue === control.value) {
          result = true
        }
      }
    }
    return result
  }

  checkPassword(control: FormControl, expertForm: FormGroup | any) {
    this.expertForm = expertForm
    let result
    if (this.expertForm !== undefined) {
      console.log(control.value.length);
      if (control.value.length === 0 || control.value !== this.expertForm.get('firstScreen.confirmPassword').value) {
        result = false
      }
      else if ( control.value === this.expertForm.get('firstScreen.confirmPassword').value) {
        result = true
      }
    }
    return result
  }

  updateData(category: string) {
    return this.http.get(`https://firay-5ffdf-default-rtdb.firebaseio.com/profesionUspect/${category}.json`)
      .pipe(map((resp: { [name: string]: any }) => {
          const normalizeData = []
          for (let respKey in resp) {
            normalizeData.push(...resp[respKey])
          }
          return normalizeData
        })
      )
  }

  removeAspects(e: any, containerAspects:ElementRef):any {
    let result
    if (e.target.tagName.toLowerCase() === 'span') {
      let spanValue = e.target.textContent
      let updateAddedAspects = this.addedAspects.filter((item: any) => item !== spanValue)
      e.target.remove()
      this.addedAspects = updateAddedAspects
    }
    if (containerAspects.nativeElement.children.length === 0){
      result = false
    }
    if (containerAspects.nativeElement.children.length >0){
      result = true
    }
    return result
  }
}
