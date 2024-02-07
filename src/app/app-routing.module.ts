import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './header/home/home.component';
import { LoansComponent } from './loans/loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { AddloanComponent } from './addloan/addloan.component';
import { EditLoansComponent } from './edit-loans/edit-loans.component';
import { authGuard } from './auth.guard';
import { SearchComponent } from './search/search.component';
import { unSavedChangesGuardGuard } from './un-saved-changes-guard.guard';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { UserdataComponent } from './users/userdata/userdata.component';

const routes: Routes = [
  // {path: 'home', redirectTo: 'loans', pathMatch: 'full'},
//  {path: 'home/:id', component: HomeComponent},
// {path:'', redirectTo:'home', pathMatch: 'full'},
{path:'login', component: LoginComponent},
{path:'home', component: HomeComponent},
{path:'customer', component: CustomerComponent},
{path:'add-loans', component: AddloanComponent},
{path:'users', component: UsersComponent},
{path:'users-data', component: UserdataComponent},
{path:'user-info', component: UserInfoComponent},
// {path:'users/:id', component: UserInfoComponent},
  // { path: 'loans',
    // children: [
    //   { path: 
    //     'add-loans', 
    //     component: AddloanComponent
    //   },
    //   { path: 
    //     'edit-loans', 
    //     component: EditLoansComponent
    //   },
    // ]
  // },


  { path:'loan-types', component: LoanTypesComponent, canActivate: [authGuard]},
  {path: 'search', component:SearchComponent, canDeactivate: [unSavedChangesGuardGuard]},
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
