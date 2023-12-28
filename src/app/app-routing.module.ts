import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SearchComponent } from './pages/search/search.component';
import { CastComponent } from './pages/cast/cast.component';
import { ReviewComponent } from './pages/review/review.component';
import { AboutmovieComponent } from './pages/aboutmovie/aboutmovie.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'movie-details/:id', component: MovieDetailsComponent },
  { path: 'cast/:id', component: CastComponent },
  { path: 'review/:id', component: ReviewComponent },
  {path: 'aboutmovie/:id',component:AboutmovieComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

