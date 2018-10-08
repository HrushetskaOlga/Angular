import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) {
  }

  editCustomers(editCustomer, id) {
    return this.http.put(`http://localhost:8000/api/customers/${id}`, editCustomer);
  }

  deleteCustomers(id) {
    return this.http.delete(`http://localhost:8000/api/customers/${id}`);
  }

  addCustomers(addCustomer) {
    return this.http.post('http://localhost:8000/api/customers', addCustomer);
  }

  getCustomers() {
    return this.http.get('http://localhost:8000/api/customers');
  }
}
