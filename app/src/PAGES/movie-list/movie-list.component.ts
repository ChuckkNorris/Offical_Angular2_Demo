import { Component, OnInit } from 'angular2/core';
import { MovieService } from '../../SERVICES/movie.service';
import { Movie } from '../../MODELS/movie.model';
import { MovieItem } from '../../TEMPLATES/movie-item/movie-item.component';

@Component({
    moduleId: 'app/src/PAGES/movie-list/',
    selector: 'movie-list',
    templateUrl: 'movie-list.view.html',
    styleUrls: ['movie-list.style.css'],
    providers: [MovieService],
    directives: [MovieItem]
})
export class MovieList implements OnInit {
    constructor(private _movieService: MovieService){}
    ngOnInit(){
        for (var i=1; i < 3; i++){
            this.getNextPageOfTopMovies();
        }
    }
    
    movieCollection: Movie[] = [];
    private _nextPage: number = 1;
    private getNextPageOfTopMovies(){
        this._movieService.getTopMovies(this._nextPage).then(movies => {
            window.console.log(movies);
            movies.forEach(movie => this.movieCollection.push(movie));
        })
        this._nextPage++;
    }
    
    onScroll(event) {
        var scroll = event.target.scrollingElement;
        var currentScrollPosition: number = scroll.clientHeight + scroll.scrollTop;
        var maxScrollPosition: number = scroll.scrollHeight;
        if (currentScrollPosition >= (.9 * maxScrollPosition)) {
            this.getNextPageOfTopMovies();
        }
    }
}
