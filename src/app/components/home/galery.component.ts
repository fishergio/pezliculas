import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styles: []
})
export class GaleryComponent implements OnInit {

  @Input('movies') movies;

  constructor() { }

  ngOnInit() {
  }

}
