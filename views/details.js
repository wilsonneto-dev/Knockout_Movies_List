define(['knockout', 'text!/views/details.html'], function (ko, templateString) {
  function homeViewModel(params) {
    // Data
    var self = this;

    self.isLoading = ko.observable(true);
    self.movieItem = ko.observable();

    $.get(
      'http://movies-example.will.tmp.br/movies/' + params.id,
      null,
      (data) => {
        self.movieItem(data);
        self.isLoading(false);
      }
    );
  }

  return { template: templateString, viewModel: homeViewModel };
});
