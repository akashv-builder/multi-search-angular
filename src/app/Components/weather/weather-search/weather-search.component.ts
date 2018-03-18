import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../../../Service/weather.service'

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css'],
  providers:[WeatherService]
})
export class WeatherSearchComponent implements OnInit {
  //string the user input
  queryWeather:String='';
  public weatherObject:any;
  hideVar:boolean=true;
  //creating the event
  @Output() success = new EventEmitter<any>();

  ngOnInit() {
  }

  //making instance of service class
  constructor(private newsService:WeatherService) { }
  
  //method a search a weather
  searchWeather() {
    this.hideVar=false;
  	this.newsService.searchWeather(this.queryWeather).subscribe((res) =>{
      //in case of sucess
      this.weatherObject = res;
      this.success.emit({
        'weatherObject': this.weatherObject
      });
  	}, (error) =>{
        //in case of error
        console.log("error in fetching weather");
  	})
  }

}
