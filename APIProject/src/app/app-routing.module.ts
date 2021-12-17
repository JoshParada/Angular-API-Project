import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './stock/stock.component';
import { ProfileComponent } from './profile/profile.component';
import { RealtimeComponent } from './realtime/realtime.component';
import { DailyComponent } from './daily/daily.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path:'stock',component:StockComponent},
  {path:'profile',component:ProfileComponent},
  {path:'realtime',component:RealtimeComponent},
  {path:'daily',component:DailyComponent},
  {path:'news',component:NewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
