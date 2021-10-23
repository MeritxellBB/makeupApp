import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { MakeupService } from 'src/app/services/makeup.service';

@Component({
  selector: 'app-lipstick',
  templateUrl: './lipstick.component.html',
  styleUrls: ['./lipstick.component.scss']
})
export class LipstickComponent implements OnInit {
  public productsList: Product[] = [];
  
  constructor(private makeupService: MakeupService) { }

  ngOnInit(): void {    
    this.makeupService.getProductsByType("lipstick").subscribe((data:any) => {
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
