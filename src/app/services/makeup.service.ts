import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../pages/home/models/product';

const baseUrl: string = "http://makeup-api.herokuapp.com/api/v1/products.json";
const maybellineProducts: string = baseUrl + "?brand=maybelline";
const typeBlush: string = baseUrl + "?product_type=blush";

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
  
  getProducts() {
    return this.http.get(typeBlush);
  } 
  
}

