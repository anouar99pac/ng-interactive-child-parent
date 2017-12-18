import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SURFACE_TYPE } from './../shared/room';

@Component({
  selector: 'app-living-room',
  templateUrl: './living-room.component.html',
  styleUrls: ['./living-room.component.css']
})
export class LivingRoomComponent{

  @Output() reporting : EventEmitter<SURFACE_TYPE> = new EventEmitter<SURFACE_TYPE>();

  countToEvent(surfaceField) {
      let surface = surfaceField.value;
      this.reporting.emit(surface);
      surfaceField.value = '';
  }
}
