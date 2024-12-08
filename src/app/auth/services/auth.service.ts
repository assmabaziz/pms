import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { ILogin } from '../interfaces/ILogin';
import { IResetPassword } from '../interfaces/IResetPassword';
import { IVerify } from '../interfaces/IVerify';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient) {}
  onLogin(loginForm: ILogin): Observable<any> {
    return this._HttpClient.post('Users/Login', loginForm);
  }
  onRegister(registerForm: FormData): Observable<any> {
    return this._HttpClient.post('Users/Register', registerForm);
  }
  onVerify(verifyForm: IVerify): Observable<any> {
    return this._HttpClient.post('Users/Verify', verifyForm);
  }
  onResetRequest(resetReq: any): Observable<any> {
    return this._HttpClient.post('Users/Reset/Request', resetReq);
  }
  onResetPassword(resetPassForm: IResetPassword): Observable<any> {
    return this._HttpClient.post('Users/Reset', resetPassForm);
  }

  getProfile(): void {
    const userToken: any = localStorage.getItem('userToken');
    let decoded: any = jwtDecode(userToken);
    const email = localStorage.setItem('email', decoded.email);
    const role = localStorage.setItem('role', decoded.role);
  }
}
