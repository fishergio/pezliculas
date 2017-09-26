import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: string = "";

  constructor(private moviesSrv: MoviesService,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      let param = params['text'];

      if (param.length > 1) {
        this.search = param;
        this.searchMovie();
      }
    });
  }

  ngOnInit() {
  }

  searchMovie() {
    if (this.search.length == 0)
      return;

    this.moviesSrv.searchMovie(this.search)
      .subscribe(data => console.log(data))
  }

}
