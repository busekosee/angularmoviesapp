import { Component, Input,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {
  @Input() movieId: string;
  constructor(
    private service: MovieApiServiceService,
    private route: ActivatedRoute
  ) {}

  getMovieCastResult: any;

  ngOnInit(): void {
    // ActivatedRoute'den parametre alınıyor
    this.route.paramMap.subscribe((params) => {
      const movieId = params.get('id');
      console.log(movieId, 'getparamid#');
      this.getMovieCast(movieId);
    });
  }

  getMovieCast(id: any) {
    this.service.getMovieCast(id).subscribe((result) => {
      console.log(result, 'movieCast#');
      this.getMovieCastResult = result.cast;
    });
  }
}
