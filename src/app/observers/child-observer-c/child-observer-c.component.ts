import { Component, OnInit } from '@angular/core';
import { DataBehaviorService } from 'app/push-behavior-data/data-behavior.service';

@Component({
  selector: 'app-child-observer-c',
  templateUrl: './child-observer-c.component.html',
  styleUrls: ['./child-observer-c.component.css']
})
export class ChildObserverCComponent implements OnInit {
  message: string;

  constructor(private dataService: DataBehaviorService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message);
  }

}
