import { Product } from "../interfaces/product.interface";
import { productList } from "../products";
import { ProductService } from "./product.service";

describe('Product Service', () => {
    let productService: ProductService;
    beforeEach(() => { productService = new ProductService(); });
  
    describe('Expecting Observable', () => {
        it('#getProductList should return collection of Products', (done: DoneFn) => {
            productService.getProductList().subscribe((products: Product[]) => {
                expect(products.length).toBeGreaterThan(1);
                expect(products).toBe(products);
                done();
            });
        });

        it('#getProduct should return a valid Product', (done: DoneFn) => {
            const productId = 3;
            productService.getProduct(productId).subscribe((product: Product) => {
                expect(product).toBeDefined();
                expect(product).toBe(productList[productId - 1]);
                deepCheck(product);
                done();
            });
        });
    
        it('#getProduct should return undefined', (done: DoneFn) => {
            const productId = 10;
            productService.getProduct(productId).subscribe((product: Product) => {
                expect(product).toBeUndefined();
                done();
            });
        });
    });

    describe('Expecting Promise', () => {
        it('#getProductList should return collection of Products', async (done: DoneFn) => {
            const products: Product[] = await productService.getProductList<Product>().toPromise();
            expect(products.length).toBeGreaterThan(1);
            expect(products).toBe(products);
            done();
        });

        it('#getProduct should return a valid Product', async (done: DoneFn) => {
            const productId = 3;
            const product: Product = await productService.getProduct<Product>(productId).toPromise();
            expect(product).toBeDefined();
            expect(product).toBe(productList[productId - 1]);
            deepCheck(product);
            done();
        });
    
        it('#getProduct should return undefined', async (done: DoneFn) => {
            const productId = 10;
            const product: Product = await productService.getProduct<Product>(productId).toPromise();
            expect(product).toBeUndefined();
            done();
        });
    });
    
});
  
function deepCheck<T>(data: T): void { 
    for (const key in data) {
        const element = data[key];
        expect(element).toBeDefined();
    }
}