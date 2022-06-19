import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar/services/navbar.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  public movieForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    releaseYear: new FormControl('', [Validators.required]),
  });

  constructor(
    private navbarService: NavbarService,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.navbarService.title.next('Add Movie');
  }

  addMovie() {
    if (this.movieForm.valid) {
      this.movieService.addMovie(this.movieForm.value).subscribe((result) => {
        console.log('result', result);
        this.movieForm.reset();
        this.router.navigate(['/movies']);
      });
    }
  }
}
