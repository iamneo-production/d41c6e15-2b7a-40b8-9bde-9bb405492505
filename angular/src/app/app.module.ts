
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSignupComponent } from './auth/userSignup/userSignup.component';
import { AdminSideComponent } from './admin-side/admin-side.component';
//import { AdminNavbarComponent } from './admin-side/admin-navbar/admin-navbar.component';
import { AdminDashboardComponent } from './admin-side/admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './admin-side/admin-profile/admin-profile.component';
import { LoginComponent } from './auth/login/login.component';
import { CompanyDetailsComponent } from './user-side/company-details/company-details.component';
import { BikeDetailsComponent } from './user-side/bike-details/bike-details.component';
import { UserBookingsComponent } from './user-side/user-bookings/user-bookings.component';
import { AdminSignupComponent } from './auth/adminSignup/adminSignup.component';
import { AddBikesComponent } from './admin-side/add-bikes/add-bikes.component';
import { UserDashboardComponent } from './user-side/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-side/user-profile/user-profile.component';
import { UserProfileEditComponent } from './user-side/user-profile-edit/user-profile-edit.component';
import { UserNavbarComponent } from './user-side/user-navbar/user-navbar.component';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { SuperAdminSideComponent } from './super-admin-side/super-admin-side.component';
import { SuperAdminLoginComponent } from './super-admin-side/super-admin-login/super-admin-login.component';
import { SuperAdminNavbarComponent } from './super-admin-side/super-admin-navbar/super-admin-navbar.component';
import { SuperAdminDasboardComponent } from './super-admin-side/super-admin-dasboard/super-admin-dasboard.component';
import { SuperAdminAllbookingsComponent } from './super-admin-side/super-admin-allbookings/super-admin-allbookings.component';



@NgModule({

  

  declarations: [
    AppComponent,
    UserSignupComponent,
    AdminSideComponent,
    AdminNavbarComponent,
    AdminDashboardComponent,
    AdminProfileComponent,
    CompanyDetailsComponent,
    BikeDetailsComponent,
    UserBookingsComponent,
    UserDashboardComponent,
    UserProfileComponent,
    UserProfileEditComponent,
    LoginComponent,
    UserNavbarComponent,
    AdminSignupComponent,
    AddBikesComponent,
    AdminLoginComponent,
     SuperAdminSideComponent,
    SuperAdminLoginComponent,
    SuperAdminNavbarComponent,
    SuperAdminDasboardComponent,
    SuperAdminAllbookingsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
