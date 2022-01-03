import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { flush, TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { StockService } from './stock.service';

describe('StockService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let stockService: StockService;
  let testSymbol:string='aapl';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    stockService = TestBed.inject(StockService);
  });

  it('should be created', () => {
    expect(stockService).toBeTruthy();
  });

  it('should retrieve profile',(/**done*/)=>{
    let result:any[]=[];
    stockService.searchProfile(testSymbol).then((resp:any) => {
      result.push(resp.data)
      expect(result.length).toBe(1)
      //flush({result})
      //done()
    })
  })

  it('should retrieve quote',(/**done*/)=>{
    let result:any[]=[];
    stockService.searchQuote(testSymbol).then((resp:any) => {
      result.push(resp.data)
      expect(result.length).toBe(1)
      //flush({result})
      //done()
    })
  })

  it('should retrieve news',(/**done*/)=>{
    let result:any[]=[];
    stockService.searchNews(testSymbol).then((resp:any) => {
      result.push(resp.data)
      expect(result.length).toBe(1)
      //flush({result})
      //done()
    })
  })

  it('should retrieve Day data',(/**done*/)=>{
    let result:any[]=[];
    let today = new Date()
    stockService.searchHourly(testSymbol,today.toISOString().slice(0, 10)).then((resp:any) => {
      result.push(resp.data)
      expect(result.length).toBe(1)
      //flush({result})
      //done()
    })
  })

  it('should retrieve Week data',(/**done*/)=>{
    let result:any[]=[];
    let today = new Date();
    stockService.searchDailyStock(testSymbol,today.toISOString().slice(0, 10)).then((resp:any) => {
      result.push(resp.data)
      expect(result.length).toBe(1)
      //flush({result})
      //done()
    })
  })

});
