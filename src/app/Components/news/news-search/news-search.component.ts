import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewsService } from '../../../Service/news.service'
@Component({
  selector: 'app-news-search',
  templateUrl: './news-search.component.html',
  styleUrls: ['./news-search.component.css'],
  providers:[NewsService]
})
export class NewsSearchComponent implements OnInit {
  queryNews:String='';
  public newsList=[];
  hideVar:boolean=true;
  @Output() success = new EventEmitter<any>();
  constructor(private newsService:NewsService) { }
  
  ngOnInit() {
  }
  searchNews() {
    this.hideVar=false;
  	this.newsService.searchNews(this.queryNews).subscribe((res) =>{
      this.newsList = res.articles;
      this.success.emit({
        'newsList': this.newsList
      });
  	}, (error) =>{

  	})
  }
}
