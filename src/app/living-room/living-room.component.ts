import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-living-room',
  templateUrl: './living-room.component.html',
  styleUrls: ['./living-room.component.css']
})
export class LivingRoomComponent{

  @Output()
  reporting = new EventEmitter();

  countToEvent(surfaceField) {
      this.reporting.emit(surfaceField.value);
      surfaceField.value = '';
  }
}
