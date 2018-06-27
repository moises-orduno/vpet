import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Article} from '../models/article.model';
import {AppConfig} from '../config/app.config';

// import { HttpHeaders } from './headers';

@Injectable()

export class ArticleService {

  constructor(private http: HttpClient) {
  }

  createAuthorizationHeader(headers: HttpHeaders) {

    // Website you wish to allow to connect
    headers.append('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    headers.append('Access-Control-Allow-Headers', 'session-variable');


  }


  // get(url) {
  //   let headers = new Headers();
  //   this.createAuthorizationHeader(headers);
  //   return this.http.get(url, {
  //     headers: headers
  //   });
  // }
  //


  get() {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    headers.append('Access-Control-Allow-Headers', 'session-variable');
    // this.createAuthorizationHeader(headers);
    // return this.http.get(AppConfig.apiUrl + 'articles/', {headers: headers});
    return this.http.get<Article[]>(AppConfig.apiUrl + 'articles/', {headers: headers});
  }

  getByAuthor(author: string) {

    return this.http.get<Article[]>(AppConfig.apiUrl + 'articles/', {params: {author: author}});
  }

  getByCategory(category: string) {

    return this.http.get<Article[]>(AppConfig.apiUrl + 'articles/', {params: {category: category}});
  }

  getById(id: string) {

    return this.http.get<Article>(AppConfig.apiUrl + 'articles/' + id);
  }

}
