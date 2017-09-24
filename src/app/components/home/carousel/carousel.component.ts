import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  slider: any[] = [];

  imgUrl: string = 'http://image.tmdb.org/t/p/w1000';
  public carouselOne: NgxCarousel;
  carouselTileItems: any[] = [];

  constructor(private moviesSrv: MoviesService) {

    this.moviesSrv.getPopular()
      .subscribe(data => {
        data.results.forEach((v, k) => {
          let path = v.backdrop_path;
          //this.slider.push(`${this.imgUrl}${path}`);
          let config = {
            img: `${this.imgUrl}${path}`,
            title: v.title
          }
          this.slider.push(config);
        })
        this.slider = this.slider.slice(4,15);

      });
  }

  ngOnInit() {

    this.carouselOne = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 400,
      interval: 4000,
      point: true,
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner',
      dynamicLength: true
    }
  }
}
