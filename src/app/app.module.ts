import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Shared/header/header.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { MovieSearchComponent } from './Components/movies/movie-search/movie-search.component';
import { MovieListComponent } from './Components/movies/movie-list/movie-list.component';
import { MovieComponent } from './Components/movies/movie-list/movie/movie.component';
import { FavmoviesComponent } from './Components/favmovies/favmovies.component';
import { FavmovieComponent } from './Components/favmovies/favmovie/favmovie.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { NewsComponent } from './Components/news/news.component';
import { FavnewsComponent } from './Components/favnews/favnews.component';
import { NewsSearchComponent } from './Components/news/news-search/news-search.component';
import { NewsListComponent } from './Components/news/news-list/news-list.component';
import { SingleNewsComponent } from './Components/news/news-list/single-news/single-news.component';
import { FavnewsSingleComponent } from './Components/favnews/favnews-single/favnews-single.component';
import { WeatherComponent } from './Components/weather/weather.component';
import { FavweatherComponent } from './Components/favweather/favweather.component';
import { WeatherSearchComponent } from './Components/weather/weather-search/weather-search.component';
import { WeatherListComponent } from './Components/weather/weather-list/weather-list.component';
import { FavweatherSingleComponent } from './Components/favweather/favweather-single/favweather-single.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
    MovieSearchComponent,
    MovieListComponent,
    MovieComponent,
    FavmoviesComponent,
    FavmovieComponent,
    NewsComponent,
    FavnewsComponent,
    NewsSearchComponent,
    NewsListComponent,
    SingleNewsComponent,
    FavnewsSingleComponent,
    WeatherComponent,
    FavweatherComponent,
    WeatherSearchComponent,
    WeatherListComponent,
    FavweatherSingleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
