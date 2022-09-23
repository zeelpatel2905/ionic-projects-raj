import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public apiKey: any = '723734cb6a33407bb4da88afb8ed9498';

  constructor(public http: HttpClient) {}

  getNews(topic) {
    return this.http.get(
      'https://newsapi.org/v2/everything?q=' +
        topic +
        '&from=2022-07-25&sortBy=publishedAt&apiKey=' +
        this.apiKey
    );
  }
}
