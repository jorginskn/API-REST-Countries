import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button';
import { CountryComponent } from './country/country.component';
import { CountryFilterComponent } from './country/country-filter/country-filter.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { CountryCardComponent } from './country/country-card/country-card.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [AppComponent, NavbarComponent, CountryComponent, CountryFilterComponent, CountryCardComponent ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule , MatInputModule, MatSelectModule,MatInputModule, MatCardModule,MatButtonModule, HttpClientModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
