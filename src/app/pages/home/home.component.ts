import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	providers: [ HomeService ]
})

export class HomeComponent implements OnInit {

	movies: any[];

	constructor(private _service: HomeService) { }

	ngOnInit() {
		this._service.getMovies().subscribe(
			movies => {
				this.movies = movies;
				console.log('messages');
				console.dir(this.movies);
			},
			error => {
				console.log('error');
				console.dir(error);
			}
		)
	}

}
