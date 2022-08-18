import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DestinationDetailsComponent } from './destination-details/destination-details.component';
import { AddDestinationComponent } from './add-destination/add-destination.component';
import { DeleteDestinationComponent } from './delete-destination/delete-destination.component';
import { DestinationList } from './destination-list/destination-list.component';
import { EditDestinationComponent } from './edit-destination/edit-destination.component';
// import { DestinationDetailsComponent } from './destination-details/destination-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DestinationDetailsComponent,
    AddDestinationComponent,
    DeleteDestinationComponent,
    DestinationList,
    EditDestinationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [authInterceptorProviders, DestinationList],
  bootstrap: [AppComponent],
})
export class AppModule {}
