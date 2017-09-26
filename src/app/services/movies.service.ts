import { Data } from '@angular/router';
import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx'; // Map

@Injectable()
export class MoviesService {

  private apiKey:string = 'fe637f7db4a79e6ef4754a5c46c88d10';
  private urlMoviedb:string  = 'https://api.themoviedb.org/3';
  private lenguageCallback = '&language=es&callback=JSONP_CALLBACK';

  movies:any[] = [];

  constructor(private jsonp: Jsonp ) { }


  getPopular() {
    let url = `${ this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    
    return this.jsonp.get(url)
        .map( res => res.json())
  }

  getInTheatres() {

    let start = new Date();
    let end = new Date();
    end.setDate(end.getDate() + 7)

    let startStr:string = `${start.getFullYear()}-${(start.getMonth()+1)}-${start.getDate()}`;
    let endStr:string = `${end.getFullYear()}-${(end.getMonth()+1)}-${end.getDate()}`;
    
    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${startStr}&primary_release_date.lte=${endStr}&api_key=${this.apiKey}${this.lenguageCallback}`;
    
    return this.jsonp.get(url)
        .map( res => res.json());
  }

  getKidsMovies() {

    let url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}${this.lenguageCallback}`;
    
    return this.jsonp.get(url)
        .map( res => res.json())
  }

  searchMovie(search: string) {
    let url = `${this.urlMoviedb}/search/movie?query=${search}&sort_by=popularity.desc&api_key=${this.apiKey}${this.lenguageCallback}`;

    return this.jsonp.get(url)
        .map( res => { 
          this.movies = res.json().results;
          return res.json().results;
        });
  }

  getMovie(id:any) {

    let url = `${this.urlMoviedb}/movie/${id}?&api_key=${this.apiKey}${this.lenguageCallback}`;

    return this.jsonp.get(url)
        .map( res => res.json());
  }

}
