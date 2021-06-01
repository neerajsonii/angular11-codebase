import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [ // lazy loading
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'my-profile', loadChildren: () => import('./modules/my-profile/my-profile.module').then(m => m.MyProfileModule)},
  { path: 'products', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)},
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  { path: 'login', redirectTo: "auth", pathMatch: 'full' },
  { path: '', redirectTo: "dashboard", pathMatch: 'full' },
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
