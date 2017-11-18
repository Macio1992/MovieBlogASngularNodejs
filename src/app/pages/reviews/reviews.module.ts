import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews.component';
import { routing } from './reviews.routing';
import { HttpModule } from '@angular/http';
// import { FileSelectDirective } from 'ng2-file-upload';
import { FacebookModule } from 'ngx-facebook';

@NgModule({
    imports: [
        CommonModule,
        routing,
        HttpModule,
        FacebookModule.forRoot()
    ],
    declarations: [
        ReviewsComponent,
        // FileSelectDirective
    ],
    exports: [
        ReviewsComponent
    ]
})

export class ReviewsModule {}

