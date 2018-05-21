import { Component, OnInit } from '@angular/core';
import { DataBehaviorService } from './data-behavior.service';

@Component({
  selector: 'app-push-behavior-data',
  templateUrl: './push-behavior-data.component.html',
  styleUrls: ['./push-behavior-data.component.css']
})
export class PushBehaviorDataComponent implements OnInit {

  constructor(private pushNotif: DataBehaviorService) { }

  ngOnInit() {
  }

  pushNotification(){
    alert('push sended successfully to all observators')
    this.pushNotif.changeMessage('From Anouar99pac');
  }

}
