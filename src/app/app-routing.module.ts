import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {CustomersComponent} from './customers/customers.component';


export const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'products', component: ProductsComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})


export class AppRouterModule {
}
