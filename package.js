Package.describe({
  name: 'superlumen:react-mixin',
  version: '3.0.3_1',
  // Brief, one-line summary of the package.
  summary: 'The NPM react-mixin package, exported on client and server',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  // documentation: 'README.md'
});

Npm.depends({
  'react-mixin': '3.0.3'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');

  // Export `Form` on both client and server
  api.export('ReactMixin');

  // User browserify to load `ReactMixin` on the client
  api.use('cosmos:browserify@0.9.2', 'client');
  api.addFiles('react-mixin.browserify.js', 'client');

  // Use `Npm.require()` to load `ReactMixin` on the server
  api.addFiles('react-mixin.server.js', 'server');
})
