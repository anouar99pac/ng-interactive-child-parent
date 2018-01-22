import { Component, OnInit } from '@angular/core';
import { QUOTATIONS} from './../../shared/quotes.list.data';


@Component({
  selector: 'app-quotes-view-child',
  templateUrl: './quotes-view-child.component.html',
  styleUrls: ['./quotes-view-child.component.css']
})
export class QuotesViewChildComponent implements OnInit {
  quotes:string;
  listLenght: number= 0;

  constructor() { 
    // console.log(QUOTATIONS);
    this.listLenght = QUOTATIONS.length;
  }

  ngOnInit() {
    this.quotes = QUOTATIONS[this.getGenerateQuote()];
  }
  
  getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getGenerateQuote(){
        return this.getRandomInt(1, this.listLenght);
  }

}
