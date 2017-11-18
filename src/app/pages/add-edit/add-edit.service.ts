import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { url } from '../../globals/url';

@Injectable()
export class AddEditService {

    token = JSON.parse(localStorage.getItem('movieUserToken')).token;
    headers = new Headers();
    autorizationHeader = 'JWT ' + this.token;

    constructor(private http: Http) {}

    addReview(form: any): Observable<any> {
        this.headers.append('Authorization', this.autorizationHeader);
        this.headers.append('Content-Type', 'application/json');

        return this.http.post(`${url}/reviews`,  JSON.stringify(form), { headers: this.headers })
        .map((response: Response) => response.json())
        .catch((error: any) => Observable.throw(error.json() || 'Server output'));
    }

    editReview(form: any, id: number): Observable<any> {
        this.headers.append('Authorization', this.autorizationHeader);
        this.headers.append('Content-Type', 'application/json');

        return this.http.put(`${url}/reviewSingle/${id}`,  JSON.stringify(form), { headers: this.headers })
        .map((response: Response) => response.json())
        .catch((error: any) => Observable.throw(error.json() || 'Server output'));
    }

    getReview(id: string): Observable<any> {
        return this.http.get(`${url}/reviewSingle/${id}`)
        .map((response: Response) => response.json())
        .catch((error: any) => Observable.throw(error.json() || 'Server output'));
    }

}