import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    
    public getToken(): string {
        return localStorage.getItem('movieUserToken');
    }

    public isAuthenticated(): boolean {
        const token = this.getToken();
        if(token)
            return true;
        else
            return false;
    }

}