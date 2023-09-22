import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
  
})

export class ApiModule {
  constructor(private http: HttpClient) {}
// ไม่รู้ถูกไหม
// รูปเเบบ get
//  this.http.get('').subscribe((data:any)=>{

//  });
// // รูปเเบบ post
//  this.http.post('').subscribe((data:any)=>{

//  });
}

 
