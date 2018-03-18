import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
	//getting input from parent includes list of all movie
  @Input() moviesrecievedbymovielist;
  constructor() { }

  ngOnInit() {
  }

}
