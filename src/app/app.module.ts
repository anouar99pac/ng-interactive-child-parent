import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HouseComponent } from './house/house.component';
import { LivingRoomComponent } from './living-room/living-room.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { PushBehaviorDataComponent } from './push-behavior-data/push-behavior-data.component';
import { ChildObserverAComponent } from './observers/child-observer-a/child-observer-a.component';
import { ChildObserverBComponent } from './observers/child-observer-b/child-observer-b.component';
import { DataBehaviorService } from 'app/push-behavior-data/data-behavior.service';
import { ChildObserverCComponent } from './observers/child-observer-c/child-observer-c.component';
import { ChildObserverDComponent } from './observers/child-observer-d/child-observer-d.component';
import { ChildObserverEComponent } from './observers/child-observer-e/child-observer-e.component';
import { ChildObserverFComponent } from './observers/child-observer-f/child-observer-f.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { QuotesViewChildComponent } from './view-child/quotes-view-child/quotes-view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HouseComponent,
    LivingRoomComponent,
    KitchenComponent,
    PushBehaviorDataComponent,
    ChildObserverAComponent,
    ChildObserverBComponent,
    ChildObserverCComponent,
    ChildObserverDComponent,
    ChildObserverEComponent,
    ChildObserverFComponent,
    ViewChildComponent,
    QuotesViewChildComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataBehaviorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
