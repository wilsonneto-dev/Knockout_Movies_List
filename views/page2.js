define(['knockout', 'text!/views/page2.html'], function (ko, templateString) {
  function SettingsViewmodel(params) {}

  return { template: templateString, viewModel: SettingsViewmodel };
});
