import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieApiServiceService } from './service/movie-api-service.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CastComponent } from './pages/cast/cast.component';
import { ReviewComponent } from './pages/review/review.component';
import { AboutmovieComponent } from './pages/aboutmovie/aboutmovie.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
    CastComponent,
    ReviewComponent,
    AboutmovieComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule, // Add this line for FormsModule
  ],
  providers: [MovieApiServiceService],
 
})
export class AppModule { }
