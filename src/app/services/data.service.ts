import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return new Promise((resolve, rej) => {
      this.http.get('https://reqres.in/api/users').subscribe(({ data }) => {
        resolve(data)
      })
    })
  }

  getUser(id) {
    return new Promise((resolve, rej) => {
      this.http.get(`https://reqres.in/api/users/${id}`).subscribe(({ data }) => {
          resolve(data)
        })
    })

  }
}
