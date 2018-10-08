import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }


  editProduct(editProduct, id) {
    return this.http.put(`http://localhost:8000/api/products/${id}`, editProduct);
  }

  addProduct(addProduct) {
    return this.http.post('http://localhost:8000/api/products', addProduct);
  }

  getProducts() {
    return this.http.get('http://localhost:8000/api/products');
  }

  deleteProduct(id) {
    return this.http.delete(`http://localhost:8000/api/products/${id}`);
  }

}
