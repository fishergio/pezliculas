import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor( private movieSrv: MoviesService){

    this.movieSrv.getPopular()
        .subscribe( data => console.log(data.results))
  }

}
