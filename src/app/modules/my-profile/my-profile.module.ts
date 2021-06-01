import { NgModule } from '@angular/core';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyProfileRoutingModule } from './my-profile-routing.module';
@NgModule({
  declarations: [MyProfileComponent],
  imports: [
    MyProfileRoutingModule
  ]
})
export class MyProfileModule { }
