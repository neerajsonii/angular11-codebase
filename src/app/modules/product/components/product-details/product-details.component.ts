import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  public productId: number = null;
  public product: Observable<Product>;
  
  private mySubscriptions: Subscription[] = []; 

  constructor(
    private readonly productService: ProductService,
    protected readonly route: ActivatedRoute,

  ) { 
    this.mySubscriptions.push(this.route.params.subscribe(({ id }) => {
      this.productId = id;
    }) as Subscription);
  }

  ngOnInit(): void {
    this.product = this.productService.getProduct<Product>(+this.productId);
  }

  ngOnDestroy(): void { 
    for (const subscription of this.mySubscriptions) {
      subscription.unsubscribe();
    }
  }

}
