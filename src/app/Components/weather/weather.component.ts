import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weather;
  constructor() { }

  ngOnInit() {
  }
  //getting the output from child
  setWeatherObject(event) {
    //storing the output event in weather
  	this.weather = event.weatherObject;
  }
}
