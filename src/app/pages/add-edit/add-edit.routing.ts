import { Routes, RouterModule } from '@angular/router';
import { AddEditComponent } from './add-edit.component';

const routes: Routes = [
    {
        path: '',
        component: AddEditComponent
    }
];

export const routing = RouterModule.forChild(routes);