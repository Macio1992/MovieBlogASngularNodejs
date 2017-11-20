import { NgModule, ModuleWithProviders } from '@angular/core';
import { MenuComponent } from './components';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const NGA_COMPONENTS = [
    MenuComponent
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
            ngModule: NgaModules
        }
    }
}