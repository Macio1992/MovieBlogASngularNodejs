import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { routing } from './login.routing';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacebookModule } from 'ngx-facebook';
import { ToastyModule } from 'ng2-toasty';

@NgModule({
    imports: [
        CommonModule,
        routing,
        HttpModule,
        ModalModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        FacebookModule.forRoot(),
        ToastyModule.forRoot(),
    ],
    declarations: [
        LoginComponent
    ]
})

export class LoginModule {}