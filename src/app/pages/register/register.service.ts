import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { url } from '../../globals/url';

@Injectable()
export class RegisterService{

    constructor(private http: Http){}

    register(user: any): Observable<any>{
        
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post(`${url}/auth/register`, user, { headers: headers })
        .map((response: Response) => response.json())
        .catch((error: any) => Observable.throw(error.json()) || 'Server output');
    }

    checkIfEmailTaken(email: string): Observable<any>{
        return this.http.get(`${url}/auth/check_if_mail_taken/${email}`)
        .map((response: Response) => response.json())
        .catch((error: any) => Observable.throw(error.json()) || 'Server output');
    }
}