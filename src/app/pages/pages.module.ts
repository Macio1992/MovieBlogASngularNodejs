import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routing } from './pages.routing';

import { PagesComponent } from './pages.component';
import { AuthGuard } from '../globals/auth.guard';
import { NgaModules } from '../theme/nga.modules';

@NgModule({
	imports: [
		CommonModule,
		routing,
		RouterModule,
		NgaModules
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
