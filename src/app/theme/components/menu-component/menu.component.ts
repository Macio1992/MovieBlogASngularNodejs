import { Component, OnInit} from '@angular/core';
import { AuthService } from '../../../globals/auth.service';

@Component({
    selector: 'menu-component',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    providers: [ AuthService ]
})

export class MenuComponent implements OnInit {

    isLogged: boolean;

    constructor(private authService: AuthService){}

    ngOnInit(): void {
        this.isLogged = this.authService.isAuthenticated();
        console.log('this.loggedin: ' + this.isLogged);
    }
    
}