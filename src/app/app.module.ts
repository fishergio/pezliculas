import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { MasonryModule } from 'angular2-masonry';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
// Services
import { MoviesService } from './services/movies.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { PageComponent } from './components/page/page.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { PosterPipe } from './pipes/poster.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    PageComponent,
    CarouselComponent,
    PosterPipe
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    NgxCarouselModule,
    MasonryModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
