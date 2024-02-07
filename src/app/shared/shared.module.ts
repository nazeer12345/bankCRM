import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusninesslogicComponent } from './busninesslogic/busninesslogic.component';



@NgModule({
  declarations: [
    BusninesslogicComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [BusninesslogicComponent]
})
export class SharedModule { }
