import { Component, OnInit, ViewChild } from '@angular/core';
import { DailyComponent } from '../daily/daily.component';
import { NewsComponent } from '../news/news.component';
import { ProfileComponent } from '../profile/profile.component';
import { RealtimeComponent } from '../realtime/realtime.component';
import { CryptoService } from '../crypto.service';
import { CryptoprofileComponent } from '../cryptoprofile/cryptoprofile.component';
import { CryptolatestComponent } from '../cryptolatest/cryptolatest.component';
import { CryptodailyComponent } from '../cryptodaily/cryptodaily.component';
import { CryptoweekComponent } from '../cryptoweek/cryptoweek.component';

@Component({
  selector: 'stock-app',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  @ViewChild(ProfileComponent) profile!: ProfileComponent
  @ViewChild(RealtimeComponent) realtime!: RealtimeComponent
  @ViewChild(DailyComponent) daily!: DailyComponent
  @ViewChild(NewsComponent) news!: NewsComponent
  @ViewChild(CryptoprofileComponent) cryptoprofile!: CryptoprofileComponent
  @ViewChild(CryptolatestComponent) cryptolatest!: CryptolatestComponent
  @ViewChild(CryptodailyComponent) cryptodaily!: CryptodailyComponent
  @ViewChild(CryptoweekComponent) cryptoweek!: CryptoweekComponent

  symbolSearch: string = '';
  isStock: string = '';
  cryptoResults: any[] = []
  cryptoID: string = ''

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
  }

  async searchByName() {
    let resp:any = await this.cryptoService.searchByName(this.symbolSearch)
    this.cryptoID = resp.currencies[0].id
    //console.log(this.cryptoID)
    return this.cryptoID
  }

  onSubmit(isValid: boolean | null) {

    if (this.isStock == 'stock') {
      console.log('in stock')
      this.profile.searchProfile();
      this.daily.searchQuote();
      //this.realtime.searchHourly();
      this.daily.searchDailyStock();
      this.news.searchNews();

    } else {
      this.searchByName().then(resp => {
        this.cryptoprofile.searchByID(this.cryptoID);
        this.cryptolatest.searchCurrent(this.cryptoID);
        this.cryptodaily.searchTweet(this.cryptoID);
        this.cryptoweek.searchWeek(this.cryptoID);

        //console.log("this is response",resp)
      })
    }
  }
}
