// lottery-search.component.ts
import { Component } from '@angular/core';
import { LotteryServiceService } from 'src/app/services/lottery-service.service';

@Component({
  selector: 'app-lottery-search',
  templateUrl: './lottery-search.component.html',
  styleUrls: ['./lottery-search.component.css']
})
export class LotterySearchComponent {
  lotteryResults: any[] = [];

  constructor(private LotteryServiceService: LotteryServiceService) {}

}
