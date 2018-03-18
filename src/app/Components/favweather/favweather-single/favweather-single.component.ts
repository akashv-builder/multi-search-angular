import { Component, OnInit , Input} from '@angular/core';
import{WeatherService} from '../../../Service/weather.service';

@Component({
  selector: 'app-favweather-single',
  templateUrl: './favweather-single.component.html',
  styleUrls: ['./favweather-single.component.css']
})
export class FavweatherSingleComponent implements OnInit {

  constructor( private weatherService:WeatherService) { }
  @Input() favcitySendByFavCity;

  
  ngOnInit() {
  }
  deleteWeather(){
    return this.weatherService.deleteWeather(this.favcitySendByFavCity).subscribe((res) =>{
      alert("Successfully Deleted "+this.favcitySendByFavCity.name+" from your favourite list.");
    },(err)=>{
      alert(this.favcitySendByFavCity.name+"  is already deleted from your favourite list.");
    })
  }

  modifyWeather(){
    return this.weatherService.modifyWeather(this.favcitySendByFavCity).subscribe((res) =>{
      alert("Successfully changed the movie name from your favourite list.");
    },(err)=>{
      alert(this.favcitySendByFavCity.name+"  cannot be changed");
    })
  }
}
