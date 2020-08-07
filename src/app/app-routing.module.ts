import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstablishmentsComponent } from './pages/establishments/establishments.component';
import { SingleEstablishmentComponent } from './pages/single-establishment/single-establishment.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    component: EstablishmentsComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: "establishment/:id",
    component: SingleEstablishmentComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
