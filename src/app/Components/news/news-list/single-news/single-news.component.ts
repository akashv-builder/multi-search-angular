import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../../../../Service/news.service'
@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.css'],
  providers:[NewsService]
})
export class SingleNewsComponent implements OnInit {
  @Input() newsrecievedbysinglenews: any;
  constructor(private newsService: NewsService) { }
  ngOnInit() {
  }
// Add favourite movie to database
addNews(sendToSaveInDbnews) {
  this.newsService.addNews(sendToSaveInDbnews).subscribe((res) =>{
    alert("Successfully Added "+this.newsrecievedbysinglenews.title+" to your favourite list.");  
  }, (err) =>{
    alert(""+this.newsrecievedbysinglenews.title+" is already present in your favourite list.");
  })
}
}
