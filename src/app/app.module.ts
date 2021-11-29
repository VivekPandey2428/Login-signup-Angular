import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserModuleComponent } from './user-module/user-module.component';
import { HttpClientModule } from  '@angular/common/http';
import { ViewImageComponent } from './view-image/view-image.component';
import { AuthService } from './signup/auth.service';
import { UserListDetailsComponent } from './user-list-details/user-list-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthGuard } from './auth.guard';

const appRoutes:Routes=[
  {path:'home',component:HomepageComponent,data:{animation:'home'}},
  {path:'login',component:LoginComponent,data:{animation:'login'}},
  {path:'signup',component:SignupComponent,data:{animation:'signup'}},
  {path:'user-module',component:UserModuleComponent,canActivate:[AuthGuard]},
  {path:'user-module/:id',component:ViewImageComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    UserModuleComponent,
    ViewImageComponent,
    UserListDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
