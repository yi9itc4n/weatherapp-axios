import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../weather.service";
import {WeatherModel} from "../weather-model";
import {ForecastComponent} from "../forecast/forecast.component";
import {ForecastModel} from "../forecast-model";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit{

  constructor(private weatherService:WeatherService) {}

  cityName="";

  weatherData={} as WeatherModel;
  forecastData={} as ForecastModel;

  ngOnInit() {
    this.weatherService.forecastData.subscribe(data=>{
      this.forecastData=data;
    });
    this.weatherService.weatherData.subscribe(data=>{
      this.weatherData=data;
    });
  }

  onSearch(){
    if (this.cityName){
      this.weatherService.getWeatherData(this.cityName);
      this.weatherService.getForecastData(this.cityName);
    }
  }
}
