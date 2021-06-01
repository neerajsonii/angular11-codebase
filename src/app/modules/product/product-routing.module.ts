import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { ProductListComponent } from "./components/product-list/product-list.component";

export const routes: Routes = [
    {
        path: '',
        component: ProductListComponent
    },
    {
        path: ':id',
        component: ProductDetailsComponent,
        pathMatch: 'prefix',
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }