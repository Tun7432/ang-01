import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Lottery, Convert as lotteryCvt } from 'src/app/model/Lottery.model';
import { LotteryServiceService } from 'src/app/services/lottery-service.service';

@Component({
  selector: 'app-lottery-search',
  templateUrl: './lottery-search.component.html',
  styleUrls: ['./lottery-search.component.css']
})
export class LotterySearchComponent {
  lotteryResults = Array<Lottery>();

  constructor(private lotteryService: LotteryServiceService, private http: HttpClient) {
    // เรียก API และแปลงข้อมูลให้กับ lottery
    http.get(lotteryService.apiEndpoint+"/lottery").subscribe((data: any) => {
      this.lotteryResults = lotteryCvt.toLottery(JSON.stringify(data));
      console.log(data[0]);
      console.log(this.lotteryResults);
    });
  }
}
