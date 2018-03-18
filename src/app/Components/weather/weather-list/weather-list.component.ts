import { Component, OnInit,Input } from '@angular/core';
import { WeatherService } from '../../../Service/weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css'],
  providers:[WeatherService]
})
export class WeatherListComponent implements OnInit {
  @Input() weatherrecievedbyweatherlist;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }
  // Add favourite movie to database
  addWeather(sendToSaveInDbweather) {
    this.weatherService.addWeather(sendToSaveInDbweather).subscribe((res) =>{
      alert("Successfully Added "+this.weatherrecievedbyweatherlist.name+" to your favourite list.");  
    }, (err) =>{
      alert(this.weatherrecievedbyweatherlist.name+" is already present in your favourite list.");
    })
  }
}

