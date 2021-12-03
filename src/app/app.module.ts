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
import { HttpClientModule, HTTP_INTERCEPTORS } from  '@angular/common/http';
import { ViewImageComponent } from './view-image/view-image.component';
import { AuthService } from './signup/auth.service';
import { UserListDetailsComponent } from './user-list-details/user-list-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthGuard } from './auth.guard';
import { FilterPipe } from './user-module/filter.pipe';
import { ToastrModule } from 'ngx-toastr';
import { HttpInterceptor } from '@angular/common/http';
import { HighlightDirective } from './highlight.directive';
import { AuthInterceptorService } from './login/auth.interceptor.service';


const appRoutes:Routes=[
  {path:'home',component:HomepageComponent,data:{animation:'home'}},
  {path:'login',component:LoginComponent,data:{animation:'login'}},
  {path:'signup',component:SignupComponent,data:{animation:'signup'}},
  {path:'user-module',component:UserModuleComponent,canActivate:[AuthGuard]},
  {path:'view-image',component:ViewImageComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}, 
  {path:'lazy',loadChildren:() => import('./lazy/lazy.module').then(m=>m.LazyModule)}
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
    FilterPipe,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:2000,
      progressBar:true,
      progressAnimation:'increasing',
    }),
  ],
  providers: [
    AuthService,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
