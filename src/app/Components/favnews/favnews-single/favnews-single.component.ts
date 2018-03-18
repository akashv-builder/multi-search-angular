import { Component, OnInit,Input } from '@angular/core';
import{NewsService} from '../../../Service/news.service';
@Component({
  selector: 'app-favnews-single',
  templateUrl: './favnews-single.component.html',
  styleUrls: ['./favnews-single.component.css'],
  providers:[NewsService]
})
export class FavnewsSingleComponent implements OnInit {
@Input() favnewsSendByFavNews;
  //creating instance of news service
  constructor(private newsService:NewsService) { }

  ngOnInit() {
  }
  //delete news method to delete a news from db
  deleteNews(){
    //calling servie method delete to delete a movie
    return this.newsService.deleteNews(this.favnewsSendByFavNews).subscribe((res) =>{
      //in case of sucess
      alert("Successfully Deleted "+this.favnewsSendByFavNews.title+" from your favourite list.");
    },(err)=>{
      //in case of error
      alert(this.favnewsSendByFavNews.title+"  is already deleted from your favourite list.");
    })
  }

  //function to modify the name of movie
  modifyNews(){
    //calling service class method to hit the api and modify the name
    return this.newsService.modifyNews(this.favnewsSendByFavNews).subscribe((res) =>{
      //in case of sucess
      alert("Successfully changed the movie name from your favourite list.");
    },(err)=>{
      //in case of error
      alert(this.favnewsSendByFavNews.title+"  cannot be changed");
    })
  }
}
