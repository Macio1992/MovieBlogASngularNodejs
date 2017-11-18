import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { routing } from './profile.routing';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        routing,
        HttpModule,
        CommonModule
    ],
    declarations: [
        ProfileComponent
    ]
})

export class ProfileModule {}