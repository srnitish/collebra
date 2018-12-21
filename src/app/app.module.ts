import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './core/material.module';
import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { RegisterComponent } from './register/register.component';
import { PrimarynavComponent } from './primarynav/primarynav.component';
import { CommonService } from './shared/common.service';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, NavbarComponent, DashboardComponent, PagenotfoundComponent, ForgotpasswordComponent, RegisterComponent, PrimarynavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule, BrowserAnimationsModule, MatFormFieldModule, ReactiveFormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
