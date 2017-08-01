import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpModule,JsonpModule } from '@angular/http'
import './rxjs-extensions';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashBoardComponent } from './dashboard.component';
import { HeroService } from './hero.service';
import { AppRoutingModule } from './app-routing.module';
import { HeroSearchComponent } from './hero-search.component'

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports: [
	BrowserModule, 
	FormsModule,
	HttpModule,
	JsonpModule,//TODO
	AppRoutingModule,
	InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [ 
	AppComponent,
	DashBoardComponent,
	HeroDetailComponent,
	HeroesComponent,
	HeroSearchComponent
  ],
  providers:[
	HeroService
  ],
  bootstrap: [ 
	AppComponent
  ]
})
export class AppModule { }
