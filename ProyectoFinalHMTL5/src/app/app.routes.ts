import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
//import { OrgUnoComponent } from './components/org-uno/org-uno.component';
import { OrgDosComponent } from './components/org-dos/org-dos.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AutoresComponent } from './components/autores/autores.component';
import { LoginComponent } from './components/login/login.component';


export const APPROUTER: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    //{ path: 'orguno', component: OrgUnoComponent},
    { path: 'usuarios', component: OrgDosComponent},
    { path: 'login', component: LoginComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full'}   
]