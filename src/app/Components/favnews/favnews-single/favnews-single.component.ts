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
  constructor(private newsService:NewsService) { }

  ngOnInit() {
  }
  deleteNews(){
    return this.newsService.deleteNews(this.favnewsSendByFavNews).subscribe((res) =>{
      alert("Successfully Deleted "+this.favnewsSendByFavNews.title+" from your favourite list.");
    },(err)=>{
      alert(this.favnewsSendByFavNews.title+"  is already deleted from your favourite list.");
    })
  }

  modifyNews(){
    return this.newsService.modifyNews(this.favnewsSendByFavNews).subscribe((res) =>{
      alert("Successfully changed the movie name from your favourite list.");
    },(err)=>{
      alert(this.favnewsSendByFavNews.title+"  cannot be changed");
    })
  }
}
