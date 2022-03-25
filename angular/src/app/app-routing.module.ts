
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { AdminDashboardComponent } from './admin-side/admin-dashboard/admin-dashboard.component';
import {UserSignupComponent} from './auth/userSignup/userSignup.component'
import {LoginComponent} from './auth/login/login.component'
import {AdminProfileComponent} from './admin-side/admin-profile/admin-profile.component'
import {AdminSignupComponent} from './auth/adminSignup/adminSignup.component'
import {AdminNavbarComponent} from './admin-side/admin-navbar/admin-navbar.component'
import {AddBikesComponent} from './admin-side/add-bikes/add-bikes.component'
import { UserDashboardComponent } from './user-side/user-dashboard/user-dashboard.component';
import { UserNavbarComponent } from './user-side/user-navbar/user-navbar.component';
//import { SignupComponent } from './auth/signup/signup.component';
import { UserProfileEditComponent } from './user-side/user-profile-edit/user-profile-edit.component';
import { UserProfileComponent } from './user-side/user-profile/user-profile.component';
import { UserBookingsComponent } from './user-side/user-bookings/user-bookings.component';
import { CompanyDetailsComponent } from './user-side/company-details/company-details.component';
import { BikeDetailsComponent } from './user-side/bike-details/bike-details.component';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import {SuperAdminDasboardComponent } from './super-admin-side/super-admin-dasboard/super-admin-dasboard.component'
import { SuperAdminAllbookingsComponent } from './super-admin-side/super-admin-allbookings/super-admin-allbookings.component';
import { SuperAdminLoginComponent } from './super-admin-side/super-admin-login/super-admin-login.component';




const routes: Routes = [

  {path: 'userDashboard', component: UserDashboardComponent },
  {path: 'userLogin', component: LoginComponent },
  {path: 'userNavbar',component:UserNavbarComponent},
  //{path: 'Signup', component:SignupComponent},
  {path: 'userProfileEdit', component:UserProfileEditComponent},
  { path: 'adminDashboard', component: AdminDashboardComponent }, 
 // { path: 'adminSignup', component: AdminSignupComponent },
  { path: 'adminLogin', component: LoginComponent },
  {path : 'adminProfile', component: AdminProfileComponent},

  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'userSignup', component: UserSignupComponent },
  { path: 'login', component: LoginComponent },
  {path : 'profile', component: AdminProfileComponent},
  { path: 'adminSignup', component: AdminSignupComponent },
  {path: 'adminnavbar', component : AdminNavbarComponent},
  {path: 'addbikes', component : AddBikesComponent},
  {path: 'userProfile', component:UserProfileComponent},
  {path: 'userbookings', component:UserBookingsComponent},
  {path: 'companydetails', component:CompanyDetailsComponent},
  {path: 'bikedetails', component:BikeDetailsComponent},
  {path: 'superadmindashboard', component:SuperAdminDasboardComponent},
  {path: 'allbookings', component:SuperAdminAllbookingsComponent},
  {path: 'superadminlogin', component:SuperAdminLoginComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
