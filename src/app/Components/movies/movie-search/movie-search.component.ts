import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../../../Service/movie.service'
@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
  providers:[MovieService]
})
export class MovieSearchComponent implements OnInit {
  @Output() success = new EventEmitter<any>();
  //variable to store input of user
  queryMovie:String='';
  //array to store the movies list
  public moviesList=[];
  //making instance of service class
  constructor( private movieService : MovieService ) { }
  hideVar:boolean=true;
  ngOnInit() {
  }
 //method to search a movie
  searchMovie() {
    this.hideVar=false;
    //calling service method to search a movie
  	this.movieService.searchMovie(this.queryMovie).subscribe((res) =>{
      //in case of sucess
  	this.moviesList = res.results;
  	this.success.emit({
      'moviesList': this.moviesList
    });
  	}, (error) =>{
      //in case of error
        console.log("error is searching")
  	})
  }

}