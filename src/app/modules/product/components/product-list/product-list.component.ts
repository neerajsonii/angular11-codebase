import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig, APP_CONFIG } from '../../../../configs/configs.service';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: Observable<Product[]>;

  constructor(
    private readonly productList: ProductService,
    @Inject(APP_CONFIG) public appConfig: AppConfig
  ) { }

  ngOnInit(): void {
    this.products = this.productList.getProductList<Product>();
  }

}
