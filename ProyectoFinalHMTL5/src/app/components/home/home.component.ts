import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Command, Key } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lat: number =6.244203;
  lng: number = -75.58121189999997;
  zoom: number= 10;
  ubicaciones = [
    {latitud: 232323, longitud:2323}, 
    {latitud: 232323, longitud:2323},
    {latitud: 234545323, longitud:4545},
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm){
    console.log(form.value);

    if(form.value.email ==='arr331' && form.value.password === '123'){
        localStorage.setItem('email', form.value.email);     
        this.router.navigate(['/usuarios']);


    }
  }

}
