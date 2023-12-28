import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private service: MovieApiServiceService,
    private router: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) {}
  @ViewChild('bottomRef') bottomRef: ElementRef;
 
  @ViewChild('reviewRef') reviewRef: ElementRef;
  getMovieDetailResult: any;
  getMovieAboutMovieResult: any;
  getMovieReviewResult:any;
  getMovieCastResult: any;
  selectedTabContent: string = 'about';
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'getparamid#');

    this.getMovie(getParamId);
    this.getMovieCast(getParamId);
    this.getMovieReview(getParamId);
    this.getMovieAboutMovie(getParamId);
  }
  
  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe(async (result) => {
      console.log(result, 'getmoviedetails#');
      this.getMovieDetailResult = await result;

      // updatetags
      this.title.setTitle(
        `${this.getMovieDetailResult.original_title} | ${this.getMovieDetailResult.tagline}`
      );
      // ... (other meta tags)

      // facebook
      // ... (other facebook meta tags)
    });
  }

  getMovieCast(id: any) {
    this.service.getMovieCast(id).subscribe((result) => {
      console.log(result, 'movieCast#');
      this.getMovieCastResult = result.cast;
    });
  }
  onCastButtonClick() {
    this.selectedTabContent = 'cast';
  }
  OnReviewButtonClick() {
    this.selectedTabContent = 'review';
  }
  OnAboutButtonClick(){
    this.selectedTabContent = 'about';
  }
  getMovieReview(id: any) {
    this.service.getMovieReview(id).subscribe((result) => {
      console.log(result, 'movieReviews#');
      this.getMovieReviewResult = result.results;
    });
  }
  getMovieAboutMovie(id: any) {
    this.service.getMovieReview(id).subscribe((result) => {
      console.log(result, 'movieAbouts#');
      this.getMovieAboutMovieResult = result.results;
    });
  }
}
