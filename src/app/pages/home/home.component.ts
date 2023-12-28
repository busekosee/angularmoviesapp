import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

export interface MovieCategory {
  nowPlayingMovies?: any[];
  upcomingMovies?: any[];
  topRatedMovies?: any[];
  popularMovies?: any[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieCategories: MovieCategory = {};
  searchForm: FormGroup;
  bannerResult: any[] = [];
 

  constructor(
    private service: MovieApiServiceService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getBannerData();
    this.getMovies('now_playing', 'nowPlayingMovies');
    this.getMovies('upcoming', 'upcomingMovies');
    this.getMovies('top_rated', 'topRatedMovies');
    this.getMovies('popular', 'popularMovies');

    this.searchForm = this.formBuilder.group({
      movieName: ['', Validators.required]
    });
  }

  getBannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }

  getMovies(category: string, targetArray: keyof MovieCategory): void {
    this.service.getMoviesByCategory(category).subscribe((result) => {
      console.log(result, `${targetArray} result#`);
      this.movieCategories[targetArray] = result.results.slice(0, 6);
    });
  }

 

 
}
