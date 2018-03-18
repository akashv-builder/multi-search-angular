import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../../../Service/weather.service'

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css'],
  providers:[WeatherService]
})
export class WeatherSearchComponent implements OnInit {
  queryWeather:String='';
  public weatherObject:any;
  hideVar:boolean=true;
  @Output() success = new EventEmitter<any>();

  ngOnInit() {
  }

  constructor(private newsService:WeatherService) { }
  
  searchWeather() {
    this.hideVar=false;
  	this.newsService.searchWeather(this.queryWeather).subscribe((res) =>{
      this.weatherObject = res;
      this.success.emit({
        'weatherObject': this.weatherObject
      });
  	}, (error) =>{

  	})
  }

}
