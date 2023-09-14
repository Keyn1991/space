import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpaceDataService {

  private apiUrl = 'https://api.nasa.gov/';
  private apiKey = 'qR2ZHhCdZEVOJXHzlPX0S4U8eqtKT5NDQVz5hKQA';

  constructor(private http: HttpClient) { }

  getMissions() {
    return this.http.get(`${this.apiUrl}missions?api_key=${this.apiKey}`);
  }

  getShips() {
    return this.http.get(`${this.apiUrl}ships?api_key=${this.apiKey}`);
  }

  getPlanets() {
    return this.http.get(`${this.apiUrl}planets?api_key=${this.apiKey}`);
  }
// Apod//
  getApod(date?: string) {
    const params: any = { api_key: this.apiKey };
    if (date) {
      params.date = date;
    }

    return this.http.get(`${this.apiUrl}planetary/apod`, { params });
  }


 //NEO
  getNeoFeed(startDate: string, endDate: string): Observable<any> {
    return this.http.get(`${this.apiUrl}feed?start_date=${startDate}&end_date=${endDate}&api_key=${this.apiKey}`);
  }

  getNeoLookup(asteroidId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}neo/${asteroidId}?api_key=${this.apiKey}`);
  }

  getNeoBrowse() {
    return this.http.get(`${this.apiUrl}neo/rest/v1/neo/browse?api_key=${this.apiKey}`);
  }


}
