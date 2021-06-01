import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformPipe } from './transform-pipe/transform-pipe.pipe';



@NgModule({
  declarations: [TransformPipe],
  imports: [],
  exports: [TransformPipe]
})
export class PipesModule { }
