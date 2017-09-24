import { forEach } from '@angular/router/src/utils/collection';
import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 movies:any[] = []; 
 popular:any[] = [];
 kids:any[] = [];
 

  constructor(private moviesSrv: MoviesService) { 
    this.getNews();
    this.getPopular();
    this.getForKids();
  }

  getNews() {
    this.moviesSrv.getInTheatres()
    .subscribe( data => {
      this.movies = data.results;
      console.log(this.movies)
    });
  }

  getPopular() {
    this.moviesSrv.getPopular()
    .subscribe( data => {
      this.popular = data.results;
    });
  }

  getForKids() {
    this.moviesSrv.getKidsMovies()
        .subscribe( data => this.kids = data.results)
  }

}
