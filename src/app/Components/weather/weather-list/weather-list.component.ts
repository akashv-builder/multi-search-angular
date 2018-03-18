import { Component, OnInit,Input } from '@angular/core';
import { WeatherService } from '../../../Service/weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css'],
  providers:[WeatherService]
})
export class WeatherListComponent implements OnInit {
  //taking input from parent
  @Input() weatherrecievedbyweatherlist;
  //making instance of weather service
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }
  // Add favourite weather to database
  addWeather(sendToSaveInDbweather) {
    //calling service method to add a weather
    this.weatherService.addWeather(sendToSaveInDbweather).subscribe((res) =>{
      //in case of sucess
      alert("Successfully Added "+this.weatherrecievedbyweatherlist.name+" to your favourite list.");  
    }, (err) =>{
      //in case of error
      alert(this.weatherrecievedbyweatherlist.name+" is already present in your favourite list.");
    })
  }
}

