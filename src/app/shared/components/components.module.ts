import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent
  ],
  providers: []
})
export class ComponentsModule { }
