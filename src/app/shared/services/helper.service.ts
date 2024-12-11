import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IChangepassword } from 'src/app/auth/interfaces/ichangepassword';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private _HttpClient: HttpClient) {}
  onGetCurrentUser(): Observable<any> {
    return this._HttpClient.get('Users/currentUser');
  }
  onGetAllProjects(data: any): Observable<any> {
    return this._HttpClient.get('Project', data);
  }
  onChangePassword(changePasswordForm: IChangepassword): Observable<any> {
    return this._HttpClient.put('Users/ChangePassword', changePasswordForm);
  }
  //if you find this function here don't take tention , i'll move it
  onCreateNewPeoject(projectInfo :any) : Observable<any> {
    return this._HttpClient.post('Project', projectInfo)
   }
}
