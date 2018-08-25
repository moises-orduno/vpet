import {Component, OnInit} from '@angular/core';
import {Article} from '../../models/article.model';
import {ArticleService} from '../../services/article.service';
import {Router} from '@angular/router';

// import {ArticleService} from '../../services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public articleList: Article[] = [{
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
    authorDescription: 'Estamos',    blog: 'Padres Primerizos',

    cover: 'who let you',

  }, {
    id: '2',
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
    title: 'Diabetes en gatos',
    description: 'Atiende de lunes a lunes de manera gratuita.',
    author: 'Eduardo Macchiavelli',
    authorDescription: 'Estamos',
    blog: 'Padres Primerizos',

    cover: 'who let you',

  }, {
    id: '3',
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
    title: 'Jornada de medicina veterinaria en Ciudad Universitaria',
    description: 'Atiende de lunes a lunes de manera gratuita.',
    author: 'Eduardo Macchiavelli',
    authorDescription: 'Estamos',    blog: 'Padres Primerizos',

    cover: 'who let you',

  }];

  constructor(private articleService: ArticleService, private router: Router) {


  }


  ngOnInit(): void {

    // firebase.database():ref(‘nombreTabla’ + id).set({nombreCampo1: valorCampo1,...});
    // this.articleService.getByAuthor('v-pet').subscribe(articles => this.setArticle(articles));
  }

  setArticle(articleList: Article[]) {
    this.articleList = articleList;
    // console.log(articleList[0]);
  }

  redirect(id: string) {

    console.log('id', id);

    this.router.navigate(['/article', id]);
  }

}
