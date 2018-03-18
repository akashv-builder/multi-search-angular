import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  //array to store the news
  public news =[];
  constructor() { }

  ngOnInit() {
  }
  //recieving the output
  setNewslist(event) {
  	this.news = event.newsList;
  }
}
