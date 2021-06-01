import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';
@NgModule({
  imports: [
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule,
    DirectivesModule,
    CommonModule
  ],
  exports: [
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule,
    DirectivesModule,
    CommonModule
  ],
  declarations: []
})
export class SharedModule { }
