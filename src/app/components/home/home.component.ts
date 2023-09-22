import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LotteryServiceService } from 'src/app/services/lottery-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private lotteryService: LotteryServiceService,private router: Router) { }
  isUserLoggedIn(): boolean {
  return this.lotteryService.isLoggedIn;
  }
  logout() {
    
  this.lotteryService.isLoggedIn = false;
  
}
}
