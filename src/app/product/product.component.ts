import { Component, OnInit , Input } from '@angular/core';
import { TypeProduct } from './product';
import { ProductService } from '../servies/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:TypeProduct[];
  validForn = false;
  detail: TypeProduct;

  constructor(
    private productService : ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      // console.log(data)
    });
    // this.products = this.productService.getProduct();
  }

  onHandleRemove(id: number) {
    this.productService.removeProduct(id).subscribe(data => {
      console.log(data);
      this.products = this.products.filter(item => item.id != data.id);
    });
  }

  onHandleEdit() {
    // this.product.status = !this.product.status;
  }

  onHandleChangeName(e: any) {
    // this.product.name = e.target.value
  }

  onDetail(product:any) {
    console.log(product);
    this.detail = product;
  }
}
