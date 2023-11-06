import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { coffee } from './coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCoffee(): Observable<coffee[]> {
    return this.http.get<coffee[]>(this.apiUrl);
  }

}
