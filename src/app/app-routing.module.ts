import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTES } from './routes.config';
import { ImageListComponent } from './component/image-list/image-list.component';
import { ImageDetailComponent } from './component/image-detail/image-detail.component';




const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ImageListComponent
  },
  {
    path: ROUTES.image + '/:id',
    component: ImageDetailComponent
  },
  {
    path: ROUTES.image,
    component: ImageListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
