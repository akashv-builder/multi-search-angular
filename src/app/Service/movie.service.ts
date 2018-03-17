import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { TMDB } from '../Config/tmdb.config';
import { App } from '../Config/app.config';
@Injectable()
export class MovieService {

  constructor(private http : Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});
  
  // Function to get search text and make service call to get movies fromTMDB
  searchMovie(gettingQueryFromComponent) {
    return this.http.get(TMDB.search_api+gettingQueryFromComponent)
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }
   
   private handleError(error: Response){
     return Observable.throw(error.statusText);
   }

   addMovie(movieRecievedBymovieComponentToSave) {
    return this.http.post(App.apiUrl+"movies", movieRecievedBymovieComponentToSave, {headers: this.headers})
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
  }

  showFav() {
    return this.http.get(App.apiUrl+"db")
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }

deleteMovie(movieRecievedBymovieComponentToDelete) {
 return this.http.delete(App.apiUrl+"movies/"+movieRecievedBymovieComponentToDelete.id, { headers: this.headers })
  .map(data => data.json(),
(error: any)=>this.handleError(error));
}

modifyMovie(movieRecievedBymovieComponentToModify) {
  var coustomName = prompt("Please enter new movie name", "Name of your choice");
  var modifiedData={
    'title':coustomName,
    'overview':movieRecievedBymovieComponentToModify.overview,
    'release_date':movieRecievedBymovieComponentToModify.release_date,
    'poster_path':movieRecievedBymovieComponentToModify.poster_path

  }
  return this.http.put(App.apiUrl+"movies/"+movieRecievedBymovieComponentToModify.id,modifiedData )
   .map(data => data.json(),
 (error: any)=>this.handleError(error));
 }

}