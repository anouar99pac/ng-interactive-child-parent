import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { QuotesViewChildComponent } from './quotes-view-child/quotes-view-child.component'

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements AfterViewInit {
  @ViewChild(QuotesViewChildComponent) mychild;
  messageComponent: string = "";

  constructor() { }

  ngAfterViewInit(){
    this.messageComponent = this.mychild.quotes;
  }

}
