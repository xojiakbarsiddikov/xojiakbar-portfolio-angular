import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {ProductsComponent} from "./products.component";
import { ProductSLevelThreeOneComponent } from './product-s-level-three-one/product-s-level-three-one.component';
import { ProductSLevelThreeTwoOneComponent } from './product-s-level-three-two-one/product-s-level-three-two-one.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductSLevelThreeOneComponent,
    ProductSLevelThreeTwoOneComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
