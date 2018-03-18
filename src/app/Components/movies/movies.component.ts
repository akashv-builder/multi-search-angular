import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  //array to store the movies list
  public movies =[];
  constructor() { }

  ngOnInit() {
  }
  //function to recieve the output event
  setMovielist(event) {
  	this.movies = event.moviesList;
  }
}
