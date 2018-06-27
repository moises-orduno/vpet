import {Component, OnInit} from '@angular/core';
import {Article} from '../../models/article.model';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  categories: string[] = ['POPULARES', 'CONSEJOS', 'NUTRICIÓN', 'SALUD', 'ENTRETENIMIENTO', 'ESTILO DE VIDA'];
  articleList: Article[];
  article: Article;
  theHtmlString: string;

  // article: Article = {
  //   id: '1',
  //   type: 'article',
  //   category: 'salud',
  //   color: '#d1e8eb',
  //   content: '<p>here must be something</p>',
  //   tags: [
  //     'dummies',
  //     'care',
  //     'basic'
  //   ],
  //   timestamp: '2018-06-11T20:10:00.000Z',
  //   title: 'El hospital de las mascotas',
  //   description: 'Atiende de lunes a lunes de manera gratuita.',
  //   author: 'Eduardo Macchiavelli',
  //   cover: 'who let you',
  //
  // };

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService) {

    this.articleList = [{
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
      cover: 'who let you',

    }
      , {
        id: '2',
        type: 'article',
        category: 'consejos',
        color: '#b895bd',
        content: '<p>here must be something</p>',
        tags: [
          'dummies',
          'care',
          'basic'
        ],
        timestamp: '2018-06-11T20:10:00.000Z',
        title: 'Mascotas en Instagram',
        description: 'Utilizar celebridades son una de las maneras de hacer que tu marketing sea visto, pero estas celebridades',
        author: 'Rodrigo HM Marketing',
        cover: 'who let you',

      }, {
        id: '3',
        type: 'article',
        category: 'populares',
        color: '#e8ba7b',
        content: '<p>here must be something</p>',
        tags: [
          'dummies',
          'care',
          'basic'
        ],
        timestamp: '2018-06-11T20:10:00.000Z',
        title: 'Cuando Pixie muera',
        description: 'Es tan duro amar sin condiciones a esa pequeña perrita llena de bondad y saber que...',
        author: 'Eduardo Arcos',
        cover: 'who let you',

      }
    ];

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => this.getArticleById(params.id));

  }

  getArticleById(id: string) {
    this.articleService.getById(id).subscribe(article => this.article = article);
  }

}
