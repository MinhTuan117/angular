import { Component, OnInit } from '@angular/core';
import { TypeProduct } from '../product/product';
import { ProductService } from '../servies/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: TypeProduct[];
  constructor(
    private productService : ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      console.log(data)
    });
  }
}
