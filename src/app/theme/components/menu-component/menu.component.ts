import { Component, OnInit} from '@angular/core';
import { AuthService } from '../../../globals/auth.service';
import { PAGES_MENU } from '../../../pages/pages.menu';
import { PAGES_MENU_LOGGED } from '../../../pages/pages.menu.logged';
import { MenuService } from '../../services';

@Component({
    selector: 'menu-component',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    providers: [ AuthService, MenuService ]
})

export class MenuComponent implements OnInit {

    isLogged: boolean;
    menuItems: any[];

    constructor(private authService: AuthService, private _service: MenuService){
        this._service.changeMenu.subscribe(
            (value) => {
                console.log('changing menu with value' + value);
            }
        )
    }

    ngOnInit(): void {
        this.isLogged = this.authService.isAuthenticated();
        
        switch (this.isLogged) {
            case true:
                this.menuItems = PAGES_MENU_LOGGED;
                console.log('pages menu logged:');
                console.dir(this.menuItems);
                break;
            case false:
                this.menuItems = PAGES_MENU;
                console.log('pages menu:');
                console.dir(this.menuItems);
                break;
            default:
                break;
        }
    }
    
}