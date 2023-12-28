// search.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from '../../service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  searchResults: any[] = [];
  query: string; // query özelliği eklendi
  translateY = 0;

  constructor(private fb: FormBuilder, private movieService: MovieApiServiceService) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      movieName: ['']
    });
  }

  onSubmit() {
    this.query = this.searchForm.value.movieName; // query özelliği dolduruldu
    if (this.query) {
      this.movieService.getSearchMovie({ movieName: this.query }).subscribe(
        (data: any) => {
          this.searchResults = data.results;
        },
        error => {
          console.error('Error fetching search results:', error);
        }
      );
    }
  }

  getImageUrl(posterPath: string): string {
    return posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : 'assets/no-image.jpg';
  }

  getGenres(genres: any[]): string {
    return genres ? genres.map(genre => genre.name).join(', ') : '';
  }
}
