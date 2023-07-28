import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../weather.service";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit{
  constructor(private weatherService:WeatherService) {}
  forecastData:any;

  ngOnInit() {
    this.weatherService.forecastData.subscribe(data=>{
      this.forecastData=data;
    });
  }

  protected readonly formatDate = formatDate;
}
