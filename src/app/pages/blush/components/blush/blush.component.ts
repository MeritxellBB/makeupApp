import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { MakeupService } from 'src/app/services/makeup.service';

@Component({
  selector: 'app-blush',
  templateUrl: './blush.component.html',
  styleUrls: ['./blush.component.scss']
})
export class BlushComponent implements OnInit {
  public productsList: Product[] = [];
  constructor(private makeupService: MakeupService) { }

  ngOnInit(): void {
    this.makeupService.getProductsByType("blush").subscribe((data:any) => {
      for (const product of data) {
        const myProduct: Product = {
          name: product.name,
          url: product.image_link,
          price: product.price
        }
        this.productsList.push(myProduct);
      }
    });
  }

}
