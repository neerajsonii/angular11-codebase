import { DebugElement } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { ProductListComponent } from "../../../modules/product/components/product-list/product-list.component";
import { TransformPipe } from "./transform-pipe.pipe";

describe('TransformPipe', () => {
    let pipe;
    beforeAll(() => {
        pipe = new TransformPipe();
    });

    it('create an TransformPipe instance', () => {
        expect(pipe).toBeTruthy();
    });

    describe('Testing pipe in class', () => {
        it('should display amount with 2 decimal places', () => {
            const number = '20000';
            const result = pipe.transform(number);
            expect(result).toBe('20000.00');
        });
    });
    
});