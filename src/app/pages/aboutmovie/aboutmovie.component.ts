import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-aboutmovie',
  templateUrl: './aboutmovie.component.html',
  styleUrls: ['./aboutmovie.component.css']
})
export class AboutmovieComponent implements OnInit {
  @Input() movieId: string;
  getMovieAboutMovieResult: any;

  constructor(
    private service: MovieApiServiceService,
    private route: ActivatedRoute
  ) {}

  @ViewChild('aboutRef') reviewRef: ElementRef;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const movieId = params.get('id');
      console.log(movieId, 'getparamid#');
      this.getMovieAboutMovie(movieId);
    });
  }

  getMovieAboutMovie(id: any) {
    this.service.getMovieAboutMovie(id).subscribe((result) => {
      console.log(result, 'movieAboutMovie#');
      this.getMovieAboutMovieResult = result;
    });
  }
}
