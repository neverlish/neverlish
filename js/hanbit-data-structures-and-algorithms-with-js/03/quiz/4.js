// 4. 비디오 대여 상점 프로그램에서 고객이 대여한 영화를 대여한 영화 리스트로 추가하시오. 그리고 고객이 영화를 대여할 때마다 대여된 영화 리스트를 출력하시오.

function movieList() {
  this.rentedMovieList = [];
  this.rent = rent;
}

function rent(video) {
  this.rentedMovieList.push(video);
  console.log(this.rentedMovieList);
}
