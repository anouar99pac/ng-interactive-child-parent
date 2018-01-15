import { DataBehaviorService } from './../../push-behavior-data/data-behavior.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-observer-a',
  templateUrl: './child-observer-a.component.html',
  styleUrls: ['./child-observer-a.component.css']
})
export class ChildObserverAComponent implements OnInit {
  message: string;

  constructor(private dataService: DataBehaviorService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message);
  }

}
