import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetalComponent } from './product-detal/product-detal.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/add', component: ProductAddComponent },
  { path: 'product/:id', component: ProductDetalComponent},
  { path: 'product/:id/edit', component: ProductEditComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
