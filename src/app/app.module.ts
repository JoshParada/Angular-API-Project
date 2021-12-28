import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { ProfileComponent } from './profile/profile.component';
import { RealtimeComponent } from './realtime/realtime.component';
import { DailyComponent } from './daily/daily.component';
import { NewsComponent } from './news/news.component';
import { CryptoprofileComponent } from './cryptoprofile/cryptoprofile.component';
import { CryptolatestComponent } from './cryptolatest/cryptolatest.component';
import { CryptodailyComponent } from './cryptodaily/cryptodaily.component';
import { CryptoweekComponent } from './cryptoweek/cryptoweek.component';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    ProfileComponent,
    RealtimeComponent,
    DailyComponent,
    NewsComponent,
    CryptoprofileComponent,
    CryptolatestComponent,
    CryptodailyComponent,
    CryptoweekComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    PlotlyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
