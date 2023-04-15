import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { flag } from '../../data-type';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getflag()
  {
    return this.http.get<flag[]>('http://localhost:3000/flags');
  }
}