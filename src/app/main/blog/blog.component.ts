import {Component, OnInit} from '@angular/core';
import {Article} from '../../models/article.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../../services/article.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  categories: string[] = ['POPULARES', 'CONSEJOS', 'NUTRICIÓN', 'SALUD', 'ENTRETENIMIENTO', 'ESTILO DE VIDA'];

  articleList: Article[];

  articleListRight;

  articleListLeft;

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService, private router: Router) {


  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => this.onCategorySelected(params.category));

  }

  onCategorySelected(category: string) {
    console.log('onCategorySelected' + category);

    if (category !== undefined) {
      this.articleService.getByCategory(category).subscribe(articles => console.log(articles));
    } else {
      this.articleService.get().subscribe(articles => this.setArticles(articles));
    }

  }

  setArticles(articleList: Article[]) {
    console.log('setArticles' + articleList);
    this.articleList = articleList;

    this.articleListRight = [];

    this.articleListLeft = [];

    for (let i = 0; i < this.articleList.length; i += 2) {
      this.articleListLeft.push(this.articleList[i]);

      this.articleListRight.push(this.articleList[i + 1]);
    }

    if (this.articleList.length % 2 !== 0) {
      this.articleListRight.pop();
    }
  }

  redirect(id: string) {

    console.log('id', id);

    this.router.navigate(['/article', id]);
  }


}
