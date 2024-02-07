import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts'

  constructor( private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  //get single user

  getUserById(userId: number): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }


  getProdcuts(): Observable<any> {
    return this.http.get('https://dummyjson.com/products');
  }

  createProduct(): Observable<any> {
    return this.http.post('https://dummyjson.com/products/add', { body: {
      title: 'BMW Pencil'
    }})
  }

  getuser() {
    let token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs"
     return this.http.get('https://dummyjson.com/auth/me', { headers : { 'Authorization' : `Bearer ${token}`}})
  }

  getUserData(){
    return this.http.get(this.baseUrl)

  }


  
}
