import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewSingleComponent } from './review-single.component';
import { routing } from './review-single.routing';
import { ModalModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        routing,
        ModalModule.forRoot(),
        HttpModule
    ],
    declarations: [
        ReviewSingleComponent
    ]
})

export class ReviewSingleModule {}