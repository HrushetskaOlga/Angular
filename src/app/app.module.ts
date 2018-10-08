import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProductsComponent} from './products/products.component';
import {CustomersComponent} from './customers/customers.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRouterModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ProductsService} from './shared/products.service';
import {MatDialogModule} from '@angular/material/dialog';
import {CustomerModalComponent} from './modal/customer-modal/customer-modal.component';
import {CustomersService} from './shared/customers.service';
import {ProductModalComponent} from './modal/product-modal/product-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomersComponent,
    CustomerModalComponent,
    ProductModalComponent
  ],
  entryComponents: [
    CustomerModalComponent,
    ProductModalComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [ProductsService, CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
