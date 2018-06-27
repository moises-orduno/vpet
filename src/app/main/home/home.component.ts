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

  public articleList: Article[];

  constructor(private articleService: ArticleService, private router: Router) {


  }


  ngOnInit(): void {

    // firebase.database():ref(‘nombreTabla’ + id).set({nombreCampo1: valorCampo1,...});
    this.articleService.getByAuthor('v-pet').subscribe(articles => this.setArticle(articles));
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
