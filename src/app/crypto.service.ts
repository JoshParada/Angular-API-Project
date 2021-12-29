import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private http:HttpClient) { }

  public searchByName(searchTerm:string){
    return new Promise((resolve,reject)=>{
      this.http.get(`https://api.coinpaprika.com/v1/search/?q=${searchTerm}&limit=1`).subscribe(
        (res)=>{
          //console.log(res)
          resolve(res);
        }, (err)=>{
          reject(err);
        }
      )
    })
  }

  public searchByID(id:string){
    return new Promise((resolve,reject)=>{
      this.http.get(`https://api.coinpaprika.com/v1/coins/${id}`).subscribe(
        (res)=>{
          //console.log(res)
          resolve(res);
        }, (err)=>{
          reject(err);
        }
      )
    })
  }

  public searchCurrent(id:string){
    return new Promise((resolve,reject)=>{
      this.http.get(`https://api.coinpaprika.com/v1/tickers/${id}`).subscribe(
        (res)=>{
          //console.log(res)
          resolve(res);
        }, (err)=>{
          reject(err);
        }
      )
    })
  }

  public searchToday(id:string){
    return new Promise((resolve,reject)=>{
      this.http.get(`https://api.coinpaprika.com/v1/coins/${id}/ohlcv/latest`).subscribe(
        (res)=>{
          //console.log(res)
          resolve(res);
        }, (err)=>{
          reject(err);
        }
      )
    })
  }

  public searchWeek(id:string,startDate:string,endDate:string){
    return new Promise((resolve,reject)=>{
      this.http.get(`https://api.coinpaprika.com/v1/coins/${id}/ohlcv/historical?start=${startDate}&end=${endDate}`).subscribe(
        (res)=>{
          //console.log(res)
          resolve(res);
        }, (err)=>{
          reject(err);
        }
      )
    })
  }

  searchTweet(id:string){
    return new Promise((resolve,reject)=>{
      this.http.get(`https://api.coinpaprika.com/v1/coins/${id}/twitter`).subscribe(
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
