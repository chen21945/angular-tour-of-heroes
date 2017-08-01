import { Injectable } from '@angular/core';
import { Http, Response,Jsonp } from '@angular/http';
import { Observable } from 'rxjs';

import { Hero } from './hero';


@Injectable()
export class HeroSearchService{
	constructor(
		private http:Http,
		private jsonp:Jsonp){};
	
	search(term: string):Observable<Hero[]>{
		return this.http.get(`app/heroes/?name=${term}`).map((r:Response)=>r.json().data as Hero[]);
		//return this.jsonp.get('http://localhost:8081/mydemo/heroes?callback=JSON_CALLBACK').map(response=>response.json().data as Hero[]);
	}

}