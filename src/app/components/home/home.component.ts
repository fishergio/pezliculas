import { forEach } from '@angular/router/src/utils/collection';
import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 movies:any; 
 popular:any[] = [];
 kids:any[] = [];
 

  constructor(private moviesSrv: MoviesService, private route: Router) { 
    this.getNews();
    this.getPopular();
    this.getForKids();
  }

  getNews() {
    this.moviesSrv.getInTheatres()
    .subscribe( data => {
      this.movies = data.results;
    });
  }

  getPopular() {
    this.moviesSrv.getPopular()
    .subscribe( data => {
      this.popular = data.results;
      console.log(this.popular);
    });
  }

  getForKids() {
    this.moviesSrv.getKidsMovies()
        .subscribe( data => this.kids = data.results)
  }

  showMovieDetail(id:string) {
    console.log(id);
  }

}
