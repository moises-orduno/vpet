import {Component, OnInit} from '@angular/core';
import {ArticleService} from './services/article.service';
import {Observable} from 'rxjs/index';
import {Article} from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isisActive: boolean;


  constructor(private articleService: ArticleService) {


  }


  ngOnInit(): void {

  }

}
