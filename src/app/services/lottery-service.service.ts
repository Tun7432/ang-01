import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LotteryServiceService {
  apiEndpoint = 'http://localhost/Webservice';
  countries: any;
  isLoggedIn: boolean = false;
  constructor() { }
}
//ใช้สำหรับการค้นหาและจัดการข้อมูลสลาก