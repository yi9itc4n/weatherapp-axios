import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {WeatherService} from "../weather.service";
import {formatDate, formatNumber} from "@angular/common";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnChanges{
  weatherData:any;

  constructor(private weatherService:WeatherService) {}

  ngOnInit() {
    this.weatherService.weatherData.subscribe(data=>{
      this.weatherData=data;
    });

  }

  weatherIconUrl =  "assets/10d.png";
  public weatherDetails:string[]=[];


  ngOnChanges(changes: SimpleChanges) {
    this.weatherDetails=[];
    this.weatherDetails.push(formatNumber(this.weatherData.main.temp_max,"en","1.0-0")+"°"+`<br>`+"Yüksek");
    this.weatherDetails.push(formatNumber(this.weatherData.wind.speed,"en","1.0-0")+" km/h"+`<br>`+"Rüzgar");
    this.weatherDetails.push(this.eptoTime(this.weatherData.sys.sunrise)+`<br>`+"Gündoğumu");
    this.weatherDetails.push(formatNumber(this.weatherData.main.temp_min,"en","1.0-0")+"°"+`<br>`+"Düşük");
    this.weatherDetails.push((this.weatherData.rain ? String(this.weatherData.rain["1h"]):'0')+"%"+`<br>`+"Yağmur");
    this.weatherDetails.push(this.eptoTime(this.weatherData.sys.sunset)+`<br>`+"Günbatımı");

  }

  eptoTime(dt: number){
    return formatDate(dt*1000,"HH:mm","en");
  }

  iconUrl(icon: string): string {
    return this.weatherIconUrl.replace("10d", icon);
  }



  protected readonly length = length;
}
