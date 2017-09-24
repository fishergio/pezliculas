import { Data } from '@angular/router';
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

    var d = new Date();
    var b = new Date();

    let start:string = d.getFullYear() +"-"+ (d.getMonth()+1) +"-"+ d.getDate();
    let end:string = b.getFullYear() +"-"+ ((b.getMonth()+1)-1) +"-"+ b.getDate();

    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${end}&primary_release_date.lte=${start}&api_key=${this.apiKey}${this.lenguageCallback}`;
    
    return this.jsonp.get(url)
        .map( res => res.json());
  }

  getKidsMovies() {

    let url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}${this.lenguageCallback}`;
    
    return this.jsonp.get(url)
        .map( res => res.json())
  }

}
