import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { url } from '../../globals/url';

@Injectable()
export class ReviewService {

    constructor(private http: Http){}

    getReview(id: any): Observable<any> {
        return this.http.get(`${url}/reviewSingle/${id}`)
        .map((response: Response) => response.json())
        .catch((error: any) => Observable.throw(error.json() || 'Server output'));
    }

    getCategory(id: string): Observable<any>{
        return this.http.get(`${url}/categories/${id}`)
        .map((response: Response) => response.json())
        .catch((error: any) => Observable.throw(error.json() || 'Server output'));
    }

}