import { Observable, of } from "rxjs";
import { Product } from "../interfaces/product.interface";
import { productList } from "../products";

export class ProductService {

    public getProductList<T>(): Observable<T[]> { 
        return of<any>(productList);
    }

    public getProduct<T>(id: number): Observable<T> | null { 
        return of<any>(productList.find((product: Product) => id === product.id));
    }

}