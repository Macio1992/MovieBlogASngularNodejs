import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routing } from './pages.routing';

import { PagesComponent } from './pages.component';
import { AuthGuard } from '../globals/auth.guard';

@NgModule({
	imports: [
		CommonModule,
		routing,
		RouterModule
	],
	declarations: [
		PagesComponent,
	],
	providers: [
		AuthGuard
	]
})

export class PagesModule {
}
