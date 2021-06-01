import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDirective } from './attribute/alert/alert.directive';
import { RepeaterDirective } from './structural/repeater/repeater.directive';
import { ComponentLoaderDirective } from './structural/component-loader/component-loader.directive';



@NgModule({
  declarations: [AlertDirective, RepeaterDirective, ComponentLoaderDirective],
  imports: [],
  exports: [AlertDirective, RepeaterDirective, ComponentLoaderDirective]
})
export class DirectivesModule { }
