import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { 
    MenuComponent, 
    MenuItemComponent 
} from './components';

import {
    MenuService
} from './services';

const NGA_COMPONENTS = [
    MenuComponent,
    MenuItemComponent
];

const NGA_SERVICES = [
    MenuService
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        ...NGA_COMPONENTS
    ],
    exports: [
        ...NGA_COMPONENTS
    ]
})

export class NgaModules{
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: NgaModules,
            providers:[
                ...NGA_SERVICES
            ]
        }
    }
}