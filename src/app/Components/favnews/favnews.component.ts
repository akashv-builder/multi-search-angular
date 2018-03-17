import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../Service/news.service'

@Component({
  selector: 'app-favnews',
  templateUrl: './favnews.component.html',
  styleUrls: ['./favnews.component.css'],
  providers:[NewsService],
})
export class FavnewsComponent implements OnInit {
  favNewsList=[];
  hideVar:boolean=false;
  constructor(private newsService : NewsService) { }


  ngOnInit() {
    this.newsService.showFav().subscribe((res) =>{
      this.favNewsList = res.news;
      console.log(this.favNewsList);
     if(this.favNewsList.length==0){
      this.hideVar=true;
     }
  })
  }

}