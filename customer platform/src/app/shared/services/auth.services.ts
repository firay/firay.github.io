import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {User} from "../interFace/Users.model";
import {UserInterface} from "../interFace/user.interface";

@Injectable({
  providedIn: 'root'
})

export class authServices {
  constructor(private http: HttpClient) {
  }

  user = new BehaviorSubject<any>(null);
  private tokenExpirationTimer: any;

  singUp(email: string, password: string,) {
    return this.http.post<UserInterface>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBI47SQQXBig6hQ1W5_2KglFbOEeTTfZP4', {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      tap(respData => {
        this.handleAuth(respData.email, respData.localId, respData.idToken, +respData.expiresIn,   true);
      }));
  }

  login(email: string, password: string) {
    return this.http.post<UserInterface>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBI47SQQXBig6hQ1W5_2KglFbOEeTTfZP4', {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      // catchError(this.handleError),
      tap(respData => {
        this.handleAuth(respData.email, respData.localId, respData.idToken, +respData.expiresIn, respData.registered)
      }));
  }

  private handleAuth(email: string, userId: string, token: string, expiresIn: number, isRegistered: boolean) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, isRegistered, token, expirationDate,);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }
}
