Package.describe({
  name: "chneau:ms-seo",
  summary: "Easily config SEO for your routes",
  git: "https://github.com/chneau/ms-seo.git",
  version: "0.4.7"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.8.2');

  api.use([
    'mongo',
    'underscore',
    'coffeescript@2.4.1',
  ]);

  api.use([
    'jquery@1.11.11',
    'deps',
    'iron:router@1.1.2'
  ], 'client');

  api.addFiles([
    'seo_collection.coffee'
  ]);

  // Client Files
  api.addFiles([
    'seo.coffee'
  ], 'client');

  api.addFiles([
    'seo_publications.coffee'
  ], 'server');
});
