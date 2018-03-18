import { Component, OnInit , Input} from '@angular/core';
import{WeatherService} from '../../../Service/weather.service';

@Component({
  selector: 'app-favweather-single',
  templateUrl: './favweather-single.component.html',
  styleUrls: ['./favweather-single.component.css']
})
export class FavweatherSingleComponent implements OnInit {
  //creating instance of weather service
  constructor( private weatherService:WeatherService) { }
  //taking input from the parent
  @Input() favcitySendByFavCity;

  
  ngOnInit() {
  }
  //method to delete a fav weather
  deleteWeather(){
    //calling service class method to delete the weather
    return this.weatherService.deleteWeather(this.favcitySendByFavCity).subscribe((res) =>{
      //in case of sucess
      alert("Successfully Deleted "+this.favcitySendByFavCity.name+" from your favourite list.");
    },(err)=>{
      //in case of error
      alert(this.favcitySendByFavCity.name+"  is already deleted from your favourite list.");
    })
  }
  //method to modify a fav weather 
  modifyWeather(){
    //calling service class method to modify the weather
    return this.weatherService.modifyWeather(this.favcitySendByFavCity).subscribe((res) =>{
      //in case of sucess
      alert("Successfully changed the movie name from your favourite list.");
    },(err)=>{
      //in case of error
      alert(this.favcitySendByFavCity.name+"  cannot be changed");
    })
  }
}
