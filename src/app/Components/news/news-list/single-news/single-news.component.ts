import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../../../../Service/news.service'
@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.css'],
  providers:[NewsService]
})
export class SingleNewsComponent implements OnInit {
  //getting the news from the parent
  @Input() newsrecievedbysinglenews: any;
  //making instance of service class
  constructor(private newsService: NewsService) { }
  ngOnInit() {
  }
// Add favourite news to database
addNews(sendToSaveInDbnews) {
  //calling the servie method to add the news
  this.newsService.addNews(sendToSaveInDbnews).subscribe((res) =>{
    //in case of sucess
    alert("Successfully Added "+this.newsrecievedbysinglenews.title+" to your favourite list.");  
  }, (err) =>{
    //in case of error
    alert(""+this.newsrecievedbysinglenews.title+" is already present in your favourite list.");
  })
}
}
