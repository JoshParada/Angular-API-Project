import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http:HttpClient) { }

  APIkey:string = 'ntyrU1UrsRc1dEahAwilaMOZ9ISV9icMT9ffaAaR'

  public searchDailyStock(symbol:string,date:string){
    return new Promise((resolve,reject)=>{
      this.http.get(`https://api.stockdata.org/v1/data/intraday?symbols=${symbol}&interval=day&date_from=${date}&api_token=${this.APIkey}`).subscribe(
        (res)=>{
          //console.log(res)
          resolve(res);
        }, (err)=>{
          reject(err);
        }
      )
    })
  }

  public searchProfile(symbol:string){
    return new Promise((resolve,reject)=>{
      this.http.get(`https://api.stockdata.org/v1/entity/profile?symbols=${symbol}&api_token=${this.APIkey}`).subscribe(
        (res)=>{
          //console.log(res)
          resolve(res);
        }, (err)=>{
          reject(err);
        }
      )
    })
  }

  public searchQuote(symbol:string){
    return new Promise((resolve,reject)=>{
      this.http.get(`https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=${this.APIkey}`).subscribe(
        (res)=>{
          //console.log(res)
          resolve(res);
        }, (err)=>{
          reject(err);
        }
      )
    })

    
  }

  public searchHourly(symbol:string,date:string){
    return new Promise((resolve,reject)=>{
      this.http.get(`https://api.stockdata.org/v1/data/intraday?symbols=${symbol}&interval=hour&sort=asc&date_from=${date}&api_token=${this.APIkey}`).subscribe(
        (res)=>{
          //console.log(res)
          resolve(res);
        }, (err)=>{
          reject(err);
        }
      )
    })
  }

  public searchNews(symbol:string){
    return new Promise((resolve,reject)=>{
      this.http.get(`https://api.stockdata.org/v1/news/all?symbols=${symbol}&language=en&filter_entities=true&limit=2&api_token=${this.APIkey}`).subscribe(
        (res)=>{
          //console.log(res)
          resolve(res);
        }, (err)=>{
          reject(err);
        }
      )
    })
  }
}
