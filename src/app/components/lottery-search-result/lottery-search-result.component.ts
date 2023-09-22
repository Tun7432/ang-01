import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Lottery, Convert as lotteryCvt } from 'src/app/model/Lottery.model';
import { LotteryServiceService } from 'src/app/services/lottery-service.service';

@Component({
  selector: 'app-lottery-search-result',
  templateUrl: './lottery-search-result.component.html',
  styleUrls: ['./lottery-search-result.component.css']
})
  
 
  
export class LotterySearchResultComponent {
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



