import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MenuService {

    changeMenu: Subject<boolean>;

    constructor(){
        this.changeMenu = new Subject();
    }

    changeMenuFlag(value: boolean): void {
        this.changeMenu.next(value);
    }

}