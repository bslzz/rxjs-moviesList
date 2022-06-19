import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { IMovie, movies } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public baseUrl = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<IMovie[]> {
    // return of(movies);
    return this.http.get<IMovie[]>(this.baseUrl).pipe(this.addDelay);
  }

  getMovie(id: number) {
    // return of(movies.find((movie) => +movie.id === +id));
    return this.http.get<IMovie>(`${this.baseUrl}/${id}`);
  }

  addMovie(movie: IMovie): Observable<IMovie> {
    return this.http.post<IMovie>(this.baseUrl, movie);
  }

  addDelay(obj: Observable<any>) {
    return obj.pipe(delay(1000));
  }
}
