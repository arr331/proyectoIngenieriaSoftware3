import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  ubicaciones = [
    {latitud: 232323, longitud:2323}, 
    {latitud: 232323, longitud:2323},
    {latitud: 234545323, longitud:4545},
  ]
  constructor() { }

  ngOnInit() {
  }
}
