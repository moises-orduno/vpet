import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Article} from '../models/article.model';
import {AppConfig} from '../config/app.config';

// import { HttpHeaders } from './headers';

@Injectable()

export class ArticleService {

  constructor(private http: HttpClient) {


  }


  articleList: Article[] = [{
    id: '1',
    type: 'article',
    category: 'salud',
    color: '#d1e8eb',
    content: '<p>here must be something</p>',
    tags: [
      'dummies',
      'care',
      'basic'
    ],
    timestamp: '2018-06-11T20:10:00.000Z',
    title: 'El hospital de las mascotas',
    description: 'Atiende de lunes a lunes de manera gratuita.',
    author: 'Eduardo Macchiavelli',
    authorDescription: 'Estamos',
    blog: 'Padres Primerizos',


    cover: 'who let you',

  }];


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
    // const headers = new HttpHeaders();
    // headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    //
    // // Request methods you wish to allow
    // headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    //
    // // Request headers you wish to allow
    // headers.append('Access-Control-Allow-Headers', 'session-variable');
    // // this.createAuthorizationHeader(headers);
    // // return this.http.get(AppConfig.apiUrl + 'articles/', {headers: headers});


    return this.articleList;
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
