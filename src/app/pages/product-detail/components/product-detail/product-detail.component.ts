import { ProductDetail } from './../../../../core/models/product-detail';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MakeupService } from './../../../../services/makeup.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product: ProductDetail = {
    name: "",
    brand: "",
    imgUrl: "",
    description: "",
    price: ""
  };

  constructor(private route: ActivatedRoute, private makeupService: MakeupService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get("id");
      this.makeupService.getProductDetail(productId).subscribe((data:any) => {
        this.product.name = data.name;
        this.product.brand = data.brand;
        this.product.imgUrl = data.image_link;
        this.product.price = data.price;
        this.product.description = data.description;
      });
    })
  }

}
