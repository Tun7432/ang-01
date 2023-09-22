import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { LotteryServiceService } from 'src/app/services/lottery-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoggedIn: boolean = false;
  
  constructor(private lotteryService: LotteryServiceService,private http: HttpClient,private router: Router,private cdr: ChangeDetectorRef) { }
  login(email: string, password: string) {
  
    const data = {
      email: email,
      password: password,
    };
    
     let jsonString = JSON.stringify(data);

    this.http.post(this.lotteryService.apiEndpoint+"/login", jsonString).subscribe(
      (response: any) => {
        // การตอบกลับเมื่อเข้าสู่ระบบสำเร็จ
        console.log('เข้าสู่ระบบสำเร็จ:', response);
        // ทำการนำผู้ใช้ไปยังหน้าหลักหรือทำตามที่คุณต้องการ
        this.lotteryService.isLoggedIn = true;
        this.router.navigate(['/home']);
        this.cdr.detectChanges();
      },
      (error) => {
        // การตอบกลับเมื่อเข้าสู่ระบบไม่สำเร็จ
        console.error('เข้าสู่ระบบไม่สำเร็จ:', error);
        // แสดงข้อความผิดพลาดถ้าต้องการ
      }
    );
  }
}
