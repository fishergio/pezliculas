import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx'; // Map

@Injectable()
export class MoviesService {

  private apiKey:string = 'fe637f7db4a79e6ef4754a5c46c88d10';
  private urlMoviedb:string  = 'https://api.themoviedb.org/3';
  private lenguageCallback = '&language=es&callback=JSONP_CALLBACK';

  constructor(private jsonp: Jsonp ) { }


  getPopular() {
    let url = `${ this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    
    return this.jsonp.get(url)
        .map( res => res.json())
  }

  getInTheatres() {
    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=2017-09-15&primary_release_date.lte=2017-10-22&api_key${this.apiKey}${this.lenguageCallback}`;
    
    return this.jsonp.get(url)
        .map( res => res.json());
  }

}
