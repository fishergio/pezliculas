import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  movie:any;
  returnTo:string="";

  constructor(private moviesSrv: MoviesService,
    private route: ActivatedRoute) {

      this.route.params.subscribe( params => {
        console.log(params);
        this.returnTo = params['page'];
        
        this.moviesSrv.getMovie(params['id'])
              .subscribe( movie => {
                this.movie = movie;
                console.log(movie);
              });
      })
      console.log(this.returnTo);

     }

  ngOnInit() {
  }

  

}
