
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { WEATHER } from '../Config/weather.config';
import { App } from '../Config/app2.config';

@Injectable()
export class WeatherService {

  constructor(private http : Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});
  
  // Function to get search text and make service call to get movies fromTMDB
  searchWeather(gettingQueryFromComponent) {
    return this.http.get(WEATHER.search_api_pre+gettingQueryFromComponent+WEATHER.search_api_post)
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }

   private handleError(error: Response){
     return Observable.throw(error.statusText);
   }

   addWeather(weatherRecievedBynewssingleComponentToSave) {
    return this.http.post(App.apiUrl+"weathers", weatherRecievedBynewssingleComponentToSave, {headers: this.headers})
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
  }

  showFav() {
    return this.http.get(App.apiUrl+"db")
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }

deleteWeather(weatherRecievedBymovieComponentToDelete) {
 return this.http.delete(App.apiUrl+"weathers/"+weatherRecievedBymovieComponentToDelete.id, { headers: this.headers })
  .map(data => data.json(),
(error: any)=>this.handleError(error));
}

modifyWeather(weatherRecievedBymovieComponentToModify) {
  var coustomName = prompt("Please enter new city name", "Name of your choice");
  var modifiedData={
    "coord": {
      "lon": weatherRecievedBymovieComponentToModify.coord.lon,
      "lat": weatherRecievedBymovieComponentToModify.coord.lat
    },
    "weather": [
      {
        "main": weatherRecievedBymovieComponentToModify.weather[0].main
      }
    ],
    "main": {
      "temp": weatherRecievedBymovieComponentToModify.main.temp
      
    },
    "name": coustomName,
  }
  return this.http.put(App.apiUrl+"weathers/"+weatherRecievedBymovieComponentToModify.id,modifiedData )
   .map(data => data.json(),
 (error: any)=>this.handleError(error));
 }
}

