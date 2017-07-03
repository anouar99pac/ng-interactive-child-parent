import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent{
  
  @Input()
  kitchenSurface:string;

  constructor() { }

}
