import { Injectable } from '@angular/core';
import { Headers,Http,Jsonp } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Hero} from './hero';


@Injectable()
export class HeroService{

	private headers = new Headers({'content-type':'application/json','Accept':'application/json'});
	
	private heroesUrl = 'app/heroes';
	
	constructor(
		private http:Http,
		private jsonp:Jsonp
		){}

	getHeroes():Promise<Hero[]>{
		return this.http.get(this.heroesUrl).toPromise().then(response =>response.json().data as Hero[]).catch(this.handleError);
		//return this.jsonp.get('http://localhost:8081/mydemo/heroes?callback=JSON_CALLBACK').toPromise().then((response) => {console.log(response.json().data)});
		//return this.http.get('http://localhost:8888/mydemo/heroes').toPromise().then(response =>response.json().data as Hero[]);
	};
	
	getHeroesSlowly(): Promise<Hero[]> {
		return new Promise<Hero[]>(resolve =>setTimeout(resolve, 2000)).then(() => this.getHeroes());
	}
	
	getHero(id:number): Promise<Hero>{
		return this.getHeroes().then(heroes=>heroes.find(hero=>hero.id===id));
	}
	
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); 
		return Promise.reject(error.message || error);
	}
	
	update(hero:Hero):Promise<Hero>{
		const url = `${this.heroesUrl}/${hero.id}`;
		return this.http.put(url,JSON.stringify(hero),{headers:this.headers}).toPromise().then(()=>hero).catch(this.handleError);
	}
	
	create(name: string): Promise<Hero> {
		return this.http.post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError);
	}
	
	
	delete(id: number): Promise<void> {
		const url = `${this.heroesUrl}/${id}`;
		return this.http.delete(url, {headers: this.headers})
			.toPromise()
			.then(() => null)
			.catch(this.handleError);
    }
}