import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-links",
  templateUrl: "./fav-link.component.html",
  styleUrls: ["./fav-link.component.css"],
})
export class FavLinkComponent implements OnInit {
  favlinks = [
    "http://www.davidfromcali.com/",
    "https://www.boxabl.com/",
    "https://en.wikipedia.org/wiki/Clandestine_HUMINT_operational_techniques",
    "https://www.artic.edu/collection?is_public_domain=1",
  ];
  constructor() {}

  ngOnInit() {}
}
