import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './Components/movies/movies.component';
import { FavmoviesComponent } from './Components/favmovies/favmovies.component';
import { NewsComponent } from './Components/news/news.component';
import { FavnewsComponent } from './Components/favnews/favnews.component';
const routes :Routes = [
  {path: '', redirectTo:'/movies',pathMatch:'full'},
  {path: 'movies', component:MoviesComponent},
  {path: 'favouritemovies', component:FavmoviesComponent },
  {path: 'news', component:NewsComponent },
  {path: 'favouritenews', component:FavnewsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}