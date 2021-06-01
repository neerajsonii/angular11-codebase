import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForgotComponent } from "./forgot/forgot.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'prefix'
    },
    {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'prefix',
    },
    {
        path: 'register',
        component: RegisterComponent,
        pathMatch: 'prefix',
    },
    {
        path: 'forgot',
        component: ForgotComponent,
        pathMatch: 'prefix',
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }