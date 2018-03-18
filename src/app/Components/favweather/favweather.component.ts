import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../Service/weather.service'
@Component({
  selector: 'app-favweather',
  templateUrl: './favweather.component.html',
  styleUrls: ['./favweather.component.css'],
  providers:[WeatherService],
})
export class FavweatherComponent implements OnInit {
  //array to store fav weather list
  favWeather=[];
  hideVar:boolean=false;

  //making instance of service class
  constructor(private weatherService : WeatherService) { }

  ngOnInit() {
    //claiing service method to display the fav cites added
    this.weatherService.showFav().subscribe((res) =>{
      this.favWeather = res.weathers;
      if(this.favWeather.length==0){
        this.hideVar=true;
       }
  })
  }
}

