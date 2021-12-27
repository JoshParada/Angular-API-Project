import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'cryptoprofile',
  templateUrl: './cryptoprofile.component.html',
  styleUrls: ['./cryptoprofile.component.scss']
})
export class CryptoprofileComponent implements OnInit {

  constructor(private cryptoService:CryptoService) { }

  ngOnInit(): void {
  }

  results: any[] = [];

  searchByID(id:string){
    this.cryptoService.searchByID(id).then((resp:any) => {
      this.results = []
      this.results.push(resp)
      console.log(id,resp,typeof this.results,this.results)
    })
  }
}
