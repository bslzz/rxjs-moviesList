import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavbarService } from 'src/app/navbar/services/navbar.service';
import { IMovie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  public movie$!: Subscription;
  public movie?: IMovie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private navbarService: NavbarService
  ) {}

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.movie$ = this.movieService.getMovie(id).subscribe((movie) => {
      this.movie = movie;
      this.navbarService.title.next(movie!.name);
    });
  }

  ngOnDestroy(): void {
    this.movie$.unsubscribe();
  }
}
