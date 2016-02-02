System.register(['angular2/core', '../../SERVICES/movie.service', '../../TEMPLATES/movie-item/movie-item.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, movie_service_1, movie_item_component_1;
    var MovieList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (movie_service_1_1) {
                movie_service_1 = movie_service_1_1;
            },
            function (movie_item_component_1_1) {
                movie_item_component_1 = movie_item_component_1_1;
            }],
        execute: function() {
            MovieList = (function () {
                function MovieList(_movieService) {
                    this._movieService = _movieService;
                    this.movieCollection = [];
                    this._nextPage = 1;
                }
                MovieList.prototype.ngOnInit = function () {
                    for (var i = 1; i < 3; i++) {
                        this.getNextPageOfTopMovies();
                    }
                };
                MovieList.prototype.getNextPageOfTopMovies = function () {
                    var _this = this;
                    this._movieService.getTopMovies(this._nextPage).then(function (movies) {
                        window.console.log(movies);
                        movies.forEach(function (movie) { return _this.movieCollection.push(movie); });
                    });
                    this._nextPage++;
                };
                MovieList.prototype.onScroll = function (event) {
                    var scroll = event.target.scrollingElement;
                    var currentScrollPosition = scroll.clientHeight + scroll.scrollTop;
                    var maxScrollPosition = scroll.scrollHeight;
                    if (currentScrollPosition >= (.9 * maxScrollPosition)) {
                        this.getNextPageOfTopMovies();
                    }
                };
                MovieList = __decorate([
                    core_1.Component({
                        moduleId: 'app/src/PAGES/movie-list/',
                        selector: 'movie-list',
                        templateUrl: 'movie-list.view.html',
                        styleUrls: ['movie-list.style.css'],
                        providers: [movie_service_1.MovieService],
                        directives: [movie_item_component_1.MovieItem]
                    }), 
                    __metadata('design:paramtypes', [movie_service_1.MovieService])
                ], MovieList);
                return MovieList;
            })();
            exports_1("MovieList", MovieList);
        }
    }
});
//# sourceMappingURL=movie-list.component.js.map