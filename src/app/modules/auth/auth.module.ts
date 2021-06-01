import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { AuthRoutingModule } from './auth.routing';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotComponent],
  imports: [
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
