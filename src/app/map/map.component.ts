import {Component, OnInit} from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  weatherMap:any;
  ngOnInit() {
    this.getWeather();
  }

  getWeather(){
    const url="https://tile.openweathermap.org/map/temp_new/3/3/3.png?appid=dd0189d0baa1f62c2d8e61e99186b748";
    axios.get(url)
      .then(response=>{
      this.weatherMap.next(response.data);
    })
      .catch(error=>{
        console.error("cannot fetch:",error);
      });
  }

}
