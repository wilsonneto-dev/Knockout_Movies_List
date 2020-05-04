require.config({
  paths: {
    text: '/bower_components/text/text',
    knockout: '/bower_components/knockout/dist/knockout',
    jquery: '/bower_components/jquery/dist/jquery',
    sammy: '/bower_components/sammy/lib/sammy',
  },
});

define(['jquery', 'knockout', 'sammy'], function ($, ko, Sammy) {
  var pageVm = {
    name: ko.observable(),
    data: ko.observable(),
    setRoute: function (name, data) {
      //Set data first, otherwise component will get old data
      this.data(data);
      this.name(name);
    },
  };

  var partialComponents = [
    { component: 'main-header', module: '/views/components/header/header.js' },
  ];

  partialComponents.forEach((component) => {
    ko.components.register(component.component, { require: component.module });
  });

  var sammyConfig = Sammy('#appHost', function () {
    var self = this;
    var pages = [
      {
        route: ['/', '#/'],
        component: 'home',
        module: '/views/home.js',
      },
      {
        route: '#/page2',
        component: 'page2',
        module: '/views/page2.js',
      },
      {
        route: ['#/lista', '#/lista/:id'],
        component: 'lista',
        module: '/views/lista.js',
      },
    ];

    pages.forEach(function (page) {
      //Register the component, only needs to hapen
      ko.components.register(page.component, { require: page.module });

      //Force routes to be an array
      if (!(page.route instanceof Array)) page.route = [page.route];

      //Register routes with Sammy
      page.route.forEach(function (route) {
        self.get(route, function () {
          //Collect the parameters, if present
          var params = {};
          ko.utils.objectForEach(this.params, function (name, value) {
            params[name] = value;
          });

          //Set the page
          pageVm.setRoute(page.component, params);
        });
      });
    });
  });

  $(document).ready(function () {
    sammyConfig.run('#/');
    ko.applyBindings(pageVm);
  });
});
