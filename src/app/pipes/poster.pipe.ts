import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(value: string, poster?: string): string {
    
    let urlImage:string = 'http://image.tmdb.org/t/p/w500';
    let bgImg:string;

    if(value.length!=0){
      bgImg = `${urlImage}${value}`;
    }else {
      bgImg = 'assets/img/default.jpg';
    }

    console.log(bgImg);
    
    return bgImg;
  }

}
