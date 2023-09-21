import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LotteryServiceService {
  apiEndpoint = 'http://localhost/Webservice';
  countries: any;
  constructor() { }
}
//ใช้สำหรับการค้นหาและจัดการข้อมูลสลาก