/// <reference path="auth.guard.ts" />
/// <reference path="auth.guard.ts" />
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { RoleAssignmentComponent } from './role-assignment/role-assignment.component';
import { LineToFgWarehouseComponent } from './line-to-fg-warehouse/line-to-fg-warehouse.component';
import { StillageToStillageComponent } from './stillage-to-stillage/stillage-to-stillage.component';
import { LoginComponent } from './login/login.component';
import { RequestControlComponent } from './request-control/request-control.component';
import { ItemRequestComponent } from './item-request/item-request.component';
import { TransferOrderComponent } from './transfer-order/transfer-order.component';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent, 
    CounterComponent,
    FetchDataComponent, 
    UserComponent,
    RoleComponent,
    RoleAssignmentComponent,
    LineToFgWarehouseComponent,
    StillageToStillageComponent,
    RequestControlComponent,
    ItemRequestComponent,
    TransferOrderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule, AgGridModule.withComponents([]),
    FormsModule, ReactiveFormsModule, BrowserAnimationsModule, TreeViewModule,
    RouterModule.forRoot([
      { path: '', component: ItemRequestComponent, pathMatch: 'full' },
      { path: 'itemRequest', component: ItemRequestComponent },
      { path: 'requestControl', component: RequestControlComponent },
      { path: 'transferOrder', component: TransferOrderComponent },
      { path: 'dashboard', component: DashboardComponent },
 
      { path: 'create-user', component: UserComponent },
      { path: 'create-role', component: RoleComponent },
      { path: 'role-assignment', component: RoleAssignmentComponent },
      { path: 'fg-warehouse', component: LineToFgWarehouseComponent },
      { path: 'stillage-to-stillage', component: StillageToStillageComponent },
    
      { path: 'login', component: LoginComponent },
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
