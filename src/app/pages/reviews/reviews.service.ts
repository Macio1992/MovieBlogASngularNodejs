import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { url } from '../../globals/url';

@Injectable()
export class ReviewsService{

    constructor(private http: Http){}

    getReviews(page: number): Observable<any>{
        return this.http.get(`${url}/reviews/${page}`)
        .map((response: Response) => response.json())
        .catch((error: any) => Observable.throw(error.json() || 'Server output'));
    }

}