import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { OrganizationChartModule, ButtonModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/components/growl/growl';
 import { AgmCoreModule } from '@agm/core'; 
import { AppComponent } from './app.component';

import { OrgUnoComponent } from "./components/org-uno/org-uno.component";
import { HomeComponent } from './components/home/home.component';
import { OrgDosComponent } from './components/org-dos/org-dos.component';
import { APPROUTER } from './app.routes';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AutoresComponent } from './components/autores/autores.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    OrgUnoComponent,
    HomeComponent,
    OrgDosComponent,
    PrincipalComponent,
    ServiciosComponent,
    AutoresComponent,
    ContactoComponent,
    FooterComponent,
    LoginComponent,
    
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OrganizationChartModule,
    FormsModule,
    GrowlModule,
    ButtonModule,
    RouterModule.forRoot(APPROUTER),
       AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAexdUynkyyvvyo1aPJAjlRZkzJO6WQL2M'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
