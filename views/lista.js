define(['knockout', 'text!/views/lista.html'], function (ko, templateString) {
  function listViewModel(params) {
    // Data
    var self = this;

    self.isLoading = ko.observable(false);
    self.moviesList = ko.observable();
    self.movieItem = ko.observable();

    // Behaviours
    self.goToDetail = function (item) {
      document.location.hash = '#/lista/' + item.id;
    };

    $.get('http://movies-example.will.tmp.br/movies', null, self.moviesList);
  }

  return { template: templateString, viewModel: listViewModel };
});
