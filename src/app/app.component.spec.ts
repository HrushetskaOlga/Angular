import {TestBed, async} from '@angular/core/testing';
import {Router} from '@angular/router';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {routes} from './app-routing.module';
import {CustomerModalComponent} from './modal/customer-modal/customer-modal.component';
import {CustomersComponent} from './customers/customers.component';
import {ProductsComponent} from './products/products.component';

describe('AppComponent', () => {
  let router: Router;
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        FormsModule
      ],
      declarations: [
        AppComponent,
        ProductsComponent,
        CustomersComponent,
        CustomerModalComponent
      ]
    }).compileComponents();
    router = TestBed.get(Router);
    router.initialNavigation();

  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
