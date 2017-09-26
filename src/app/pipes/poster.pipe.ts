import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(value: any, size?:any): any {
    
    let urlImage:string = 'http://image.tmdb.org/t/p/w500';
    let bgImg:string;

    if(value != null){
      bgImg = `${urlImage}${value}`;
    }else {
      bgImg = 'assets/img/default.jpg';
    }
        
    return bgImg;
  }

}
