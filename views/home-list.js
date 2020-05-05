define(['knockout', 'text!/views/home-list.html'], function (
  ko,
  templateString
) {
  function homeViewModel(params) {
    // Data
    var self = this;

    self.isLoading = ko.observable(false);
    self.moviesList = ko.observable();
    self.movieItem = ko.observable();

    // Behaviours
    self.goToDetail = function (item) {
      document.location.hash = '#/details/' + item.id;
    };

    $.get('http://movies-example.will.tmp.br/movies', null, self.moviesList);
  }

  return { template: templateString, viewModel: homeViewModel };
});
