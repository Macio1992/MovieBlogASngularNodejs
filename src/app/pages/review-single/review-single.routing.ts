import { Routes, RouterModule } from '@angular/router';
import { ReviewSingleComponent } from './review-single.component';

const routes: Routes = [
    {
        path: '',
        component: ReviewSingleComponent
    }
    
];

export const routing = RouterModule.forChild(routes);