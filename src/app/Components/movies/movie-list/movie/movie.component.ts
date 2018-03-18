import { Component, OnInit,Input} from '@angular/core';
import { MovieService } from '../../../../Service/movie.service'
import { TMDB } from '../../../../Config/tmdb.config';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers:[MovieService]
})
export class MovieComponent implements OnInit {
  //getting the input from the parent
  @Input() movierecievedbymovie: any;
  //base url of image
  image_base:string=TMDB.image_base;
  //making instance of service class
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }  
 // Add favourite movie to database
 addMovie(sendToSaveInDbmovie) {
   //calling service class method to add a fav movie
  this.movieService.addMovie(sendToSaveInDbmovie).subscribe((res) =>{
    //in case of sucess
    alert("Successfully Added "+this.movierecievedbymovie.title+" to your favourite list.");  
  }, (err) =>{
    //in case of error
    alert(""+this.movierecievedbymovie.title+" is already present in your favourite list.");
  })
}

}