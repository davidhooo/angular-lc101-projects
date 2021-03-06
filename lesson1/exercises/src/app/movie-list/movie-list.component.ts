import { Component, OnInit } from "@angular/core";

@Component({
  selector: "movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"],
})
export class MovieListComponent implements OnInit {
  movies = [
    "The Manchurian Candidate",
    "Oceans 8",
    "Hunt for The Wilderpeople",
    "Jojo Rabbit",
    "The Midnight",
    "Crazy Rich Asians"
  ];

  constructor() {}

  ngOnInit() {}
}
