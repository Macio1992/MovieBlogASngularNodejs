import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { url } from '../../globals/url';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

    constructor(private http: Http){}

    getMovies(): Observable<any> {
        return this.http.get(`${url}/movies`)
        .map((response: Response) => response.json())
        .catch((error: any) => Observable.throw(error.json() || 'Server output'));
    }

}