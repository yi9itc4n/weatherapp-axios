import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import {TopBarComponent} from "./top-bar/top-bar.component";
import { WeatherService } from './weather.service';
import {ForecastComponent} from "./forecast/forecast.component";
import {ButtonModule} from "primeng/button";
import {InplaceModule} from "primeng/inplace";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {CardModule} from "primeng/card";
import { MapComponent } from './map/map.component';
import {PanelModule} from "primeng/panel";
import {ImageModule} from "primeng/image";
import {InputTextModule} from "primeng/inputtext";

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    TopBarComponent,
    ForecastComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    InplaceModule,
    ScrollPanelModule,
    CardModule,
    PanelModule,
    ImageModule,
    InputTextModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
