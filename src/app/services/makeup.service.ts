import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../core/models/product';

const baseUrl: string = "http://makeup-api.herokuapp.com/api/v1/products.json";

@Injectable()
export class MakeupService {

  constructor(private http: HttpClient) {}
  
  getProductsByType(type: string) {
    return this.http.get(baseUrl + `?product_type=${type}`);
  } 

  getProductsByBrand(brand: string) {
    return this.http.get(baseUrl + `?brand=${brand}`);
  } 

  getProductDetail(id: any) {
    return this.http.get(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
  }

}

