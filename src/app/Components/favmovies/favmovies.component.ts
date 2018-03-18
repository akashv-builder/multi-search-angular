import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../Service/movie.service'
@Component({
  selector: 'app-favmovies',
  templateUrl: './favmovies.component.html',
  styleUrls: ['./favmovies.component.css'],
  providers:[MovieService],
})
export class FavmoviesComponent implements OnInit {
  favMoviesList=[];
  hideVar:boolean=false;
  constructor(private movieService : MovieService) { }

  ngOnInit() {
    this.favMoviesList=[];
    this.movieService.showFav().subscribe((res) =>{
      this.favMoviesList=[];
      console.log("show");
      this.favMoviesList = res.movies;
     if(this.favMoviesList.length==0){
      this.hideVar=true;
     }
  })
}
}