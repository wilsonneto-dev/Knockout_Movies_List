function WebmailViewModel() {
  // Data
  var self = this;

  self.isLoading = ko.observable(false);
  self.moviesList = ko.observable();
  self.movieItem = ko.observable();

  // Behaviours
  self.goToDetail = function (item) {
    document.location.hash = item.id;
  };

  $.get('http://movies-example.will.tmp.br/movies', null, self.moviesList);

  // Client-side routes
  Sammy(function () {
    this.get('#:movieId', function () {
      $.get(
        'http://movies-example.will.tmp.br/movies/' + this.params.movieId,
        null,
        self.movieItem
      );
    });
  }).run();
}
