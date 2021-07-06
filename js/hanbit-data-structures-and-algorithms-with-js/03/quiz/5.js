// 5. 비디오 대여 상점 프로그램에 반납 함수를 추가하시오. 고객이 영화를 반납하면 대여된 영화 리스트에서 영화를 삭제한 다음 이용할 수 있는 영화 리스트로 추가하시오.

function movieList() {
  this.rentedMovieList = [];
  this.returnedMovieList = [];
  this.rentMovie = rentMovie;
  this.returnMovie = returnMovie;
}

function rentMovie(movie) {
  this.rentedMovieList.push(movie);
  console.log(this.rentedMovieList);
}

function returnMovie(movie) {
  var indexOfMovie = this.rentedMovieList.indexOf(movie);
  this.rentedMovieList = this.rentedMovieList.slice(0, indexOfMovie).concat(this.rentedMovieList(indexOfMovie+1, this.rentedMovieList.length));
  this.returnedMovieList.push(movie);
}
