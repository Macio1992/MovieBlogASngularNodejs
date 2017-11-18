import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { url } from '../../globals/url';
import { User } from './user.model';

@Injectable()
export class ProfileService {

    constructor(private http: Http){}
    
    getUserInfo(): Observable<User> {

        let email = JSON.parse(localStorage.getItem('movieUserToken')).email;
        let token = JSON.parse(localStorage.getItem('movieUserToken')).token;

        let headers = new Headers(
            { 'Authorization': 'JWT ' + token}
        );
        let options = new RequestOptions({ headers: headers });

        return this.http.get(`${url}/auth/get_user_info/${email}`, options)
        .map((response: Response) => response.json())
        .catch((error: any) => Observable.throw(error.json() || 'Server output'));
    }
    
}