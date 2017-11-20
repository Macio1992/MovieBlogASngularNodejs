import { NgModule } from '@angular/core';
import { AddEditComponent } from './add-edit.component';
import { CommonModule } from '@angular/common';
import { routing } from './add-edit.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
    imports: [
        CommonModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ModalModule.forRoot(),
        FileUploadModule
    ],
    declarations: [
        AddEditComponent,
    ]
})

export class AddEditModule {}