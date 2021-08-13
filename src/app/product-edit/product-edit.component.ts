import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../servies/product.service';
import { TypeProduct } from '../product/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: TypeProduct = {
    id: 0,
    name: '',
    price: 0,
    img: '',
    status: true,
    desc:''
  };
  constructor(
    private productServices: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    this.activatedRoute.params.subscribe(params => {
      this.productServices.get(params.id).subscribe(data => {
        this.product = data;
      });
    });
  }
  onUpdateProduct() {
    this.productServices.updateProduct(this.product).subscribe(data => {
      this.router.navigateByUrl('/product');
    });
  }
}
