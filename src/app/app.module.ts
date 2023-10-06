import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './components/login/login.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { LotterySearchComponent } from './components/lottery-search/lottery-search.component';
import { ManageLotteryComponent } from './components/manage-lottery/manage-lottery.component';
import { RegisterComponent } from './components/register/register.component';
import { LotteryDetailComponent } from './components/lottery-detail/lottery-detail.component';
import { LotteryHistoryComponent } from './components/lottery-history/lottery-history.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { MemberComponent } from './components/member/member.component';
import {NgxPermissionsModule} from 'ngx-permissions';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MemberDataService } from './services/member-data.service';
import { MyDialogComponent } from './components/my-dialog/my-dialog.component';
import { CartComponent } from './components/cart/cart.component';

import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

import { AdminEditComponent } from './components/admin-edit/admin-edit.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardAdminComponent,
    LotterySearchComponent,
    ManageLotteryComponent,
    RegisterComponent,
    LotteryDetailComponent,
    LotteryHistoryComponent,
    HomeComponent,
    MemberComponent,
    MyDialogComponent,
    CartComponent,
   
    AdminEditComponent,
  
   
  
 

 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    NgxSpinnerModule
    // NgxPermissionsModule.forRoot()
  ],
  providers: [
    MemberDataService,
    NgxSpinnerService
    // {

    //   provide: 'adminPermission',
    //   useClass: NgxPermissionsGuard,
    //   multi: true,
    //   deps: [NgxPermissionsService], // ระบุ NgxPermissionsService ของคุณ
    // },
    // {
    //   provide: 'userPermission',
    //   useClass: NgxPermissionsGuard,
    //   multi: true,
    //   deps: [NgxPermissionsService], // ระบุ NgxPermissionsService ของคุณ
    // },
    // {
    //   provide: 'memberPermission',
    //   useClass: NgxPermissionsGuard,
    //   multi: true,
    //   deps: [NgxPermissionsService], // ระบุ NgxPermissionsService ของคุณ
    // },
  ],
  bootstrap: [AppComponent],
 
})
export class AppModule { }