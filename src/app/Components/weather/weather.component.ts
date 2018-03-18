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
  setWeatherObject(event) {
  	this.weather = event.weatherObject;
  }
}
