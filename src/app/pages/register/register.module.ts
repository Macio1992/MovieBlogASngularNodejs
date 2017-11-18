import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { routing } from './register.routing';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        routing,
        HttpModule,
        ModalModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        RegisterComponent
    ]
})

export class RegisterModule {}