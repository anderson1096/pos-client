import { Injectable } from '@angular/core';
import {Product} from '../models/product.model';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import urljoin from 'url-join';

@Injectable()

export class ProductService {
    
    private productsUrl: string;

    constructor( private http: Http){
        this.productsUrl = urljoin(environment.apiUrl, 'products'); 
    }
    getProducts(): Promise<void | Product[]>{

        return this.http.get(this.productsUrl)
                .toPromise()
                .then( response => response.json().data as Product[])
                .catch(this.handleError);
    }

    getProduct(id: number): Promise<void | Product>{
        const url = urljoin(this.productsUrl, id)
        return this.http.get(url)
            .toPromise()
            .then( response => response.json().data as Product)
            .catch(this.handleError);
    }

    handleError( error: any){
        const errMsg = error.message ? error.message : 
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.log(errMsg);     
    }
}