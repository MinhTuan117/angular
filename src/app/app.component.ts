import { Component } from '@angular/core';
import { TypeProduct } from './product/product';
import { dataFake } from './data-fake';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pt15304';
  products = dataFake ;
 
  //  addItem(product:any) {
  //   this.products.push(product);
  //   console.log(this.products);
  //   // this.item = product;
  // }
}
