import { Component, OnInit, ViewChild } from '@angular/core';
import { DailyComponent } from '../daily/daily.component';
import { NewsComponent } from '../news/news.component';
import { ProfileComponent } from '../profile/profile.component';
import { RealtimeComponent } from '../realtime/realtime.component';
import { StockService } from '../stock.service';

@Component({
  selector: 'stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  @ViewChild(ProfileComponent) profile!: ProfileComponent
  @ViewChild(RealtimeComponent) realtime!: RealtimeComponent
  @ViewChild(DailyComponent) daily!: DailyComponent
  @ViewChild(NewsComponent) news!: NewsComponent

  symbolSearch: string = '';
  isStock: string = '';

  ngOnInit(): void {
  }

  onSubmit(isValid: boolean | null) {

    if (this.isStock == 'stock') {
      // console.log('in stock')
      // this.profile.searchProfile();
      // this.realtime.searchHourly();
      this.daily.searchDailyStock();
      // this.news.searchNews();

    } else {
      console.log('in crypto')
    }

  }

}
