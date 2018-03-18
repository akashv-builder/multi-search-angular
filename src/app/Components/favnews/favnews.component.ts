import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../Service/news.service'

@Component({
  selector: 'app-favnews',
  templateUrl: './favnews.component.html',
  styleUrls: ['./favnews.component.css'],
  providers:[NewsService],
})
export class FavnewsComponent implements OnInit {
  //array to store the fav movies list
  favNewsList=[];
  hideVar:boolean=false;
  //making instance of service class
  constructor(private newsService : NewsService) { }


  ngOnInit() {
    //calling sercvice class method to display the fav movies
    this.newsService.showFav().subscribe((res) =>{
      //in case of sucess
      this.favNewsList = res.news;
      //if length of movies is 0 then display a jumbotron
     if(this.favNewsList.length==0){
      this.hideVar=true;
     }
  },(err)=>{
    //in case of error
    console.log("Cant feth the list");
  })
  }

}