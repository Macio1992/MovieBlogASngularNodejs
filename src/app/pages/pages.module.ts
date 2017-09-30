import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routing } from './pages.routing';

import { PagesComponent } from './pages.component';

@NgModule({
	imports: [
		CommonModule,
		routing,
		RouterModule
	],
	declarations: [
		PagesComponent
	]
})

export class PagesModule {
}
