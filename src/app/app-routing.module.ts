import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';

const routes: Routes = [
  { path: '', component:HomeComponent, children:[
    {path:'',component:NavbarComponent},
    { path: 'create', component: SignupComponent },
    {path:'dashboard',component:DashboardComponent},
  ]},
  {path:'login',component:LoginComponent},
  {path:'verify/account',component:VerifyAccountComponent},
  {path:"**",component:ErrorpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}
