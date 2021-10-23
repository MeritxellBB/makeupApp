import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../core/models/product';

const baseUrl: string = "http://makeup-api.herokuapp.com/api/v1/products.json";

@Injectable()
export class MakeupService {

  private productsList: Product[] = [
    {
      name: "Producto 1",
      url: "/assets/lipstick1.jpg",
      price: "10€"
    },
    {
      name: "Producto 2",
      url: "/assets/lipstick1.jpg",
      price: "10€"
    },
    {
      name: "Producto 3",
      url: "/assets/lipstick1.jpg",
      price: "10€"
    },
    {
      name: "Producto 4",
      url: "/assets/lipstick1.jpg",
      price: "10€"
    }
  ];

  constructor(private http: HttpClient) {}
  
  getProductsByType(type: string) {
    return this.http.get(baseUrl + `?product_type=${type}`);
  } 

  getProductsByBrand(brand: string) {
    return this.http.get(baseUrl + `?brand=${brand}`);
  } 

}

