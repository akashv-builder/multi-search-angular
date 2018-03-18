import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../Service/movie.service'
@Component({
  selector: 'app-favmovies',
  templateUrl: './favmovies.component.html',
  styleUrls: ['./favmovies.component.css'],
  providers:[MovieService],
})
export class FavmoviesComponent implements OnInit {
  //array to store fav movies list
  favMoviesList=[];
  hideVar:boolean=false;
  //making instance of service class
  constructor(private movieService : MovieService) { }

  ngOnInit() {
    //calling show fav method of service
    this.movieService.showFav().subscribe((res) =>{
      this.favMoviesList=[];
      console.log("show");
      this.favMoviesList = res.movies;
      //if favmovies list is blan a jumbotron with a message to add a fav movie is shown
     if(this.favMoviesList.length==0){
      this.hideVar=true;
     }
  })
}
}