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
  //creating a event sucess
  @Output() success = new EventEmitter<any>();
  constructor(private newsService:NewsService) { }
  
  ngOnInit() {
  }
  //method to search a news
  searchNews() {
    this.hideVar=false;
    //calling servie method to display news
  	this.newsService.searchNews(this.queryNews).subscribe((res) =>{
      //in case of response
      this.newsList = res.articles;
      this.success.emit({
        //sending the list
        'newsList': this.newsList
      });
  	}, (error) =>{
        //in case of error
  	})
  }
}
