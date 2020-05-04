define(['knockout', 'text!/views/home.html'], function (ko, templateString) {
  function SettingsViewmodel(params) {}

  return { template: templateString, viewModel: SettingsViewmodel };
});
