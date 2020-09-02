import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListingComponent } from './movie-listing/movie-listing.component';
import { MovieSearchFormComponent } from './movie-search-form/movie-search-form.component';
import { MovieSearchResultItemComponent } from './movie-search-result-item/movie-search-result-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListingComponent,
    MovieSearchFormComponent,
    MovieSearchResultItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
