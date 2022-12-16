import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductSLevelThreeOneComponent} from "./product-s-level-three-one/product-s-level-three-one.component";
import {
  ProductSLevelThreeTwoOneComponent
} from "./product-s-level-three-two-one/product-s-level-three-two-one.component";

const routes: Routes = [
  {
    path: 'level3.1',
    component: ProductSLevelThreeOneComponent
  },
  {
    path: 'level3.2',
    component: ProductSLevelThreeTwoOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
