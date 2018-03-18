import { Component, OnInit,Input } from '@angular/core';
import{MovieService} from '../../../Service/movie.service';
import { TMDB } from '../../../Config/tmdb.config';
@Component({
  selector: 'app-favmovie',
  templateUrl: './favmovie.component.html',
  styleUrls: ['./favmovie.component.css'],
  providers:[MovieService]
})
export class FavmovieComponent implements OnInit {
//receiving movie from favmovies component
@Input() favmovieSendByFavMovies;
image_base:string=TMDB.image_base;
  //making instance of service class
  constructor(private movieService:MovieService) { }

  ngOnInit() {
  }
  //funcrtion to delete a movie
  deleteMovie(){
    //calling service method delete movie and sending the movie as parameter
    return this.movieService.deleteMovie(this.favmovieSendByFavMovies).subscribe((res) =>{
      //in case of sucess
      alert("Successfully Deleted "+this.favmovieSendByFavMovies.title+" from your favourite list.");
    },(err)=>{
            //in case of error
      alert(this.favmovieSendByFavMovies.title+"  is already deleted from your favourite list.");
    })
  }
  //function to modify a movie
  modifyMovie(){
     //calling service method modify movie and sending the movie as parameter
    return this.movieService.modifyMovie(this.favmovieSendByFavMovies).subscribe((res) =>{
      //in case of sucess
      alert("Successfully changed the movie name from your favourite list.");
    },(err)=>{
      //in case of error
      alert(this.favmovieSendByFavMovies.title+"  cannot be changed");
    })
  }
}
