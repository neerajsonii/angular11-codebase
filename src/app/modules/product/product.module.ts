import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from './services/product.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent],
  imports: [
    ProductRoutingModule,
    SharedModule
  ],
  providers: [ProductService]
})
export class ProductModule { }
