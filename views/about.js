define(['knockout', 'text!/views/about.html'], function (ko, templateString) {
  function SettingsViewmodel(params) {}

  return { template: templateString, viewModel: SettingsViewmodel };
});
