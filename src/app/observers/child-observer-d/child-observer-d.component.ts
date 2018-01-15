import { Component, OnInit } from '@angular/core';
import { DataBehaviorService } from 'app/push-behavior-data/data-behavior.service';

@Component({
  selector: 'app-child-observer-d',
  templateUrl: './child-observer-d.component.html',
  styleUrls: ['./child-observer-d.component.css']
})
export class ChildObserverDComponent implements OnInit {

  message: string;

  constructor(private dataService: DataBehaviorService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message);
  }
}
