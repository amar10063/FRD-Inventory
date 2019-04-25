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
import { LoginComponent } from './login/login.component';
import { RequestControlComponent } from './request-control/request-control.component';
import { ItemRequestComponent } from './item-request/item-request.component';
import { ItemRequestReceiveComponent } from './item-request-receive/item-request-receive.component';
import { DummyComponent } from './dummy/dummy.component';
import { UserComponent } from './user/user.component';
import { UserAccount } from './Services/AccountService';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,     
    RequestControlComponent,
    ItemRequestComponent,
    ItemRequestReceiveComponent,
    LoginComponent,
    DummyComponent,
    UserComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule, HttpModule, AgGridModule.withComponents([]),
    FormsModule, ReactiveFormsModule, BrowserAnimationsModule, TreeViewModule,
    RouterModule.forRoot([
      { path: '', component: ItemRequestComponent, pathMatch: 'full' },
      { path: 'itemRequest', component: ItemRequestComponent },
      { path: 'requestControl', component: RequestControlComponent },
      { path: 'item-request-receive', component: ItemRequestReceiveComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'dummy', component: DummyComponent },  
      { path: 'login', component: LoginComponent },
      { path: 'user', component: UserComponent },
     ])
  ],
  providers: [UserAccount],
  bootstrap: [AppComponent]
})
export class AppModule { }
