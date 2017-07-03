import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  
  kitchenSurface: Number = 0.0;
  message: string = "";

  constructor() { }
  
  ngOnInit() {
    this.kitchenSurface = 20.5;
  }


  onSubscribe(surface:Number){
    console.info('Hello Event received from Child living room !',surface);
    let total =parseFloat(this.kitchenSurface.toString()) + parseFloat(surface.toString());
    alert('Parent Response: Total surface of your House :'+total.toString());
  }
  
  
}
