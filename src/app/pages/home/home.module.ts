import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { routing } from './home.routing';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ReviewsModule } from '../reviews/reviews.module';

@NgModule({
    imports: [
        routing,
        HttpModule,
        CommonModule,
        ReviewsModule
    ],
    declarations: [
        HomeComponent
    ],
})

export class HomeModule {}