import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core'; // Add the necessary imports
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() movieId: string;
  getMovieReviewResult: any;
  review = [
    { user: 'User1', comment: 'This is a great movie!' },
    { user: 'User2', comment: 'I enjoyed it a lot.' },
    // ... other reviews
  ];

  @ViewChild('reviewRef') reviewRef: ElementRef;

  constructor(
    private service: MovieApiServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const movieId = params.get('id');
      console.log(movieId, 'getparamid#');
      this.getMovieReview(movieId);
    });
  }

  

  getMovieReview(id: any) {
    this.service.getMovieReview(id).subscribe((result) => {
      console.log(result, 'movieReviews#');
      this.getMovieReviewResult = result.results;
    });
  }
}
