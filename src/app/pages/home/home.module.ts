import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { routing } from './home.routing';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        routing,
        HttpModule,
        CommonModule
    ],
    declarations: [
        HomeComponent
    ],
})

export class HomeModule {}