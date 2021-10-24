import { MakeupService } from './../../../../services/makeup.service';
import { Product } from './../../../../core/models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public productsList: Product[] = [];

  constructor(private makeupService: MakeupService) {}

  ngOnInit(): void {
    this.makeupService.getProductsByBrand("milani").subscribe((data:any) => {
      for (const product of data) {
        const myProduct: Product = {
          id: product.id,
          name: product.name,
          url: product.image_link,
          price: product.price
        }
        this.productsList.push(myProduct);
      }
    });
  }

  showDetail() {
    console.log("Ahora voy a mostrar el detalle");
  }
}
