import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './header/home/home.component';
import { ContactComponent } from './header/contact/contact.component';
import { RouterModule } from '@angular/router';
import { LoansComponent } from './loans/loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { AddloanComponent } from './addloan/addloan.component';
import { EditLoansComponent } from './edit-loans/edit-loans.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { UsersComponent } from './users/users.component';
import { ValuedUsersComponent } from './users/valued-users/valued-users.component';
import { SharedModule } from './shared/shared.module';
import { TestComponent } from './test/test.component';
import { HttpClientModule} from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { UserdataComponent } from './users/userdata/userdata.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    LoansComponent,
    LoanTypesComponent,
    AddloanComponent,
    EditLoansComponent,
    SearchComponent,
    LoginComponent,
    CustomerComponent,
    UsersComponent,
    ValuedUsersComponent,
    TestComponent,
    UserDetailsComponent,
    UserInfoComponent,
    UserdataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
