import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http: HttpClient) { }
  baseurl = 'https://api.themoviedb.org/3';  // MovieDB API'nin doğru temel URL'si
  apikey = '457a246cc1733e3869891d851066e002';

  
 
  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }
  getMoviesByCategory(category: string): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${category}?api_key=${this.apikey}`);
  }
  // trendingmovieapidata 
  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
  }
  
  // searchmovive
  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');

    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }

  // getmoviedatails
  getMovieDetails(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }
  getNowPlayingMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/now_playing?api_key=${this.apikey}`);
  }
  getMovieCast(movieId: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${movieId}/credits?api_key=${this.apikey}`);
  }
 
  getMovieReview(movieId: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${movieId}/reviews?api_key=${this.apikey}`);
  }
  getMovieAboutMovie(movieId: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${movieId}?api_key=${this.apikey}`);
  }
  
  
}
