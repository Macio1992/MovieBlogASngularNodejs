import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EqualPasswordValidator } from './validators';

const VALIDATORS = [
    EqualPasswordValidator
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [],
    exports: [
        
    ]
})

export class ThemeModule {}