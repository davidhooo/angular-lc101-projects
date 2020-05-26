import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-photos",
  templateUrl: "./fav-photos.component.html",
  styleUrls: ["./fav-photos.component.css"],
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Potato Camera Photos";
  image1 =
    "https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2016/11/SpudCam-Potato-Pinhole-Camera-image-1-630x525.jpg";
  image2 =
    "https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2018/06/Real-Potato-Camera-by-Corridor-Crew-image-2.jpg";
  image3 =
    "https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2016/11/SpudCam-Potato-Pinhole-Camera-image-3-630x491.jpg";

  constructor() {}

  ngOnInit() {}
}
