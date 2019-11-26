import {AppRoutingModule} from './app-routing.module';
import {ServiceComponent} from './service/service.component';
import {ModelsComponent} from './models/models.component';
import {ComponentsComponent} from './components/components.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {RouterModule, Routes} from '@angular/router';
<<<<<<< HEAD
import {AppComponent} from './app.component';
=======
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
>>>>>>> c07d937456d555392cf813fa13059b56ae932ca6

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
];

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    ModelsComponent,
    ComponentsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
