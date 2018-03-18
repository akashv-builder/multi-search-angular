import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../Service/weather.service'
@Component({
  selector: 'app-favweather',
  templateUrl: './favweather.component.html',
  styleUrls: ['./favweather.component.css'],
  providers:[WeatherService],
})
export class FavweatherComponent implements OnInit {
  favWeather=[];
  hideVar:boolean=false;
  constructor(private weatherService : WeatherService) { }

  ngOnInit() {
    this.weatherService.showFav().subscribe((res) =>{
      this.favWeather = res.weathers;
      if(this.favWeather.length==0){
        this.hideVar=true;
       }
  })
  }
}

