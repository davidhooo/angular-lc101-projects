import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ChoresListComponent } from './chores-list/chores-list.component';
import { FavPhotosComponent } from './fav-photos/fav-photos.component';
import { VideogamesComponent } from './videogames/videogames.component';
import { FavLinkComponent } from './videogames/fav-link/fav-link.component';
import { PageTitleComponent } from './page-title/page-title.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ChoresListComponent,
    FavPhotosComponent,
    VideogamesComponent,
    FavLinkComponent,
    PageTitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
