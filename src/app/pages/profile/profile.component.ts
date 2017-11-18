import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { User } from './user.model';
import { Router } from '@angular/router';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    providers: [ ProfileService ]
})

export class ProfileComponent implements OnInit {

    user: User;

    constructor(private _service: ProfileService, private _router: Router){}

    ngOnInit(): void{
        this._service.getUserInfo().subscribe(
            user => {
                this.user = user;
                console.dir(this.user);
            },
            error => {
                console.log('error:');
                console.dir(error);
            }
        )
    }

    logout(): void {
        localStorage.removeItem('movieUserToken');
        this._router.navigate(['/komunikat']);
    }

}