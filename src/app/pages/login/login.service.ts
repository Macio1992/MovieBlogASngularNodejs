import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { url } from '../../globals/url';

@Injectable()
export class LoginService {

    constructor(private http: Http){}

    login(user: any): Observable<any> {

        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post(`${url}/auth/sign_in`, user, { headers: headers })
        .map((response: Response) => response.json())
        .catch(this.handleError);

    }

    private handleError(error: Response | any) {
        console.error(error);
        return Observable.throw(error);
    }

}