import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit{
    private products: Product[];
    constructor(private productService: ProductService){

    }
    
    ngOnInit(){
        this.productService
        .getProducts()
        .then(( products: Product[])=>{
            this.products = products;
        });
    }
}