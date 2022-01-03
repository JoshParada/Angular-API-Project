import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { flush, TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { CryptoService } from './crypto.service';

describe('CryptoService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let cryptoService: CryptoService;
  let testSymbol:string='btc-bitcoin';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    cryptoService = TestBed.inject(CryptoService);
  });

  it('should be created', () => {
    expect(cryptoService).toBeTruthy();
  });

  it('should retrieve crypto ID',(/**done*/)=>{
    let result:any[]=[];
    cryptoService.searchByName('btc').then((resp:any) => {
      result.push(resp.data)
      expect(result.length).toBe(1)
      //flush({result})
      //done()
    })
  })

  it('should retrieve crypto profile ',(/**done*/)=>{
    let result:any[]=[];
    cryptoService.searchByID(testSymbol).then((resp:any) => {
      result.push(resp.data)
      expect(result.length).toBe(1)
      //flush({result})
      //done()
    })
  })

  it('should retrieve current price',(/**done*/)=>{
    let result:any[]=[];
    cryptoService.searchCurrent(testSymbol).then((resp:any) => {
      result.push(resp.data)
      expect(result.length).toBe(1)
      //flush({result})
      //done()
    })
  })

  it('should retrieve latest',(/**done*/)=>{
    let result:any[]=[];
    cryptoService.searchToday(testSymbol).then((resp:any) => {
      result.push(resp.data)
      expect(result.length).toBe(1)
      //flush({result})
      //done()
    })
  })

  it('should retrieve stock ID',(/**done*/)=>{
    let result:any[]=[];
    cryptoService.searchByName(testSymbol).then((resp:any) => {
      result.push(resp.data)
      expect(result.length).toBe(1)
      //flush({result})
      //done()
    })
  })
  
  it('should retrieve twitter feed',(/**done*/)=>{
    let result:any[]=[];
    cryptoService.searchTweet(testSymbol).then((resp:any) => {
      result.push(resp.data)
      expect(result.length).toBe(1)
      //flush({result})
      //done()
    })
  })

  it('should retrieve week data',(/**done*/)=>{
    let result:any[]=[];
    let today = new Date();
    let lastweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    cryptoService.searchWeek(testSymbol, lastweek.toISOString().slice(0, 10), today.toISOString().slice(0, 10)).then((resp:any) => {
      result.push(resp.data)
      expect(result.length).toBe(1)
      //flush({result})
      //done()
    })
  })
  
});
