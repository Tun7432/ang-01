import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LotteryDetailComponent } from './components/lottery-detail/lottery-detail.component';
import { LotteryHistoryComponent } from './components/lottery-history/lottery-history.component';
import { LotterySearchResultComponent } from './components/lottery-search-result/lottery-search-result.component';
import { LotterySearchComponent } from './components/lottery-search/lottery-search.component';
import { ManageLotteryComponent } from './components/manage-lottery/manage-lottery.component';
import { RegisterComponent } from './components/register/register.component';
import { MaterialModule } from './material/material.module';


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
    LotterySearchResultComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
     MatCardModule,
    MatButtonModule,
    // NgxPermissionsModule.forRoot()
  ],
  providers: [
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
  bootstrap: [AppComponent]
})
export class AppModule { }