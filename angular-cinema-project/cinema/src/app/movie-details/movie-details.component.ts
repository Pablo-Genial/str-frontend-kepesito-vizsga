import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() chosenMovieCategory;

  constructor() { }

  ngOnInit(): void {
  }

}
