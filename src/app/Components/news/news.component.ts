import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public news =[];
  constructor() { }

  ngOnInit() {
  }
  setNewslist(event) {
  	this.news = event.newsList;
  }
}
