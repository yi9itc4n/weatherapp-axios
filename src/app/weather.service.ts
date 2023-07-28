import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import axios from "axios";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'dd0189d0baa1f62c2d8e61e99186b748';
  private apiUrl = 'http://api.openweathermap.org/data/2.5/';

  weatherData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  forecastData: BehaviorSubject<any> = new BehaviorSubject<any>(null);


  constructor() { }

  getWeatherData(cityName:string){
    const url = `${this.apiUrl}weather?q=${cityName}&appid=${this.apiKey}&units=metric`;
    axios.get(url)
      .then(response=>{
        this.weatherData.next(response.data);
      })
      .catch(error=>{
        console.error("Error fetching data:",error);
      });
  }

  getForecastData(cityName:string){
    const url = `${this.apiUrl}forecast?q=${cityName}&appid=${this.apiKey}&units=metric`;
    axios.get(url)
      .then(response=>{
        this.forecastData.next(response.data);
      })
      .catch(error=>{
        console.error("Error fetching data:",error);
      });
  }
}
