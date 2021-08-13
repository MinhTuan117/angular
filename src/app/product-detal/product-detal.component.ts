import { Component, OnInit, Input } from '@angular/core';
import { TypeProduct } from '../product/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../servies/product.service';


@Component({
  selector: 'app-product-detal',
  templateUrl: './product-detal.component.html',
  styleUrls: ['./product-detal.component.css']
})
export class ProductDetalComponent implements OnInit {
  product: TypeProduct;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.activatedRoute.params.subscribe(params => {
      console.log('params', params);
      this.productService.get(params.id).subscribe(data => {
        this.product = data;
        // console.log('data',data)
      });
    });
  }
}
