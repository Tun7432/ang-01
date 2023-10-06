import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { MemberDataService } from 'src/app/services/member-data.service';
import { LotteryService } from '../../services/lottery.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  cartItems: any[] = [];
  constructor(private cartService: CartService,private lotteryService: LotteryService,
     private router: Router,
     private memberDataService: MemberDataService,
  ) { console.log(this.cartService.Usersid); }
  memberName: string | null = null;
  ngOnInit() {
    // ดึงชื่อสมาชิกจาก Service เมื่อ Component ถูกโหลด
    this.memberName = this.memberDataService.getMemberName();
  }
  isUserLoggedIn(): boolean {
    return this.lotteryService.isLoggedIn;
  }

  logout() {
    this.lotteryService.isLoggedIn = false;
    this.router.navigate(['/home']); // เด้งไปยังหน้า home
  }
}
