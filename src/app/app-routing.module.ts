import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDestinationComponent } from './add-destination/add-destination.component';
import { DestinationDetailsComponent } from './destination-details/destination-details.component';
import { DestinationList } from './destination-list/destination-list.component';
import { EditDestinationComponent } from './edit-destination/edit-destination.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'home', component: DestinationList },
  { path: 'home/destination/:id', component: DestinationDetailsComponent },
  { path: 'new', component: AddDestinationComponent },
  { path: 'home/destination/:id/edit', component: EditDestinationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
