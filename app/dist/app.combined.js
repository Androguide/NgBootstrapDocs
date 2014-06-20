(function() {
  'use strict';
  angular.module("NgBootstrapDocs", ["Angustrap", "ngRoute"]).config([
    '$routeProvider', function($routeProvider) {
      return $routeProvider.when("/", {
        templateUrl: "views/home.html",
        controller: "HomeCtrl"
      }).when("/getting-started", {
        templateUrl: "views/getting-started/index.html",
        controller: "GettingStartedCtrl"
      }).when("/css", {
        templateUrl: "views/css/index.html",
        controller: "CSSCtrl"
      }).when("/components", {
        templateUrl: "views/components/index.html",
        controller: "ComponentsCtrl"
      }).when("/javascript", {
        templateUrl: "views/javascript/index.html",
        controller: "JavaScriptCtrl"
      }).when("/customize", {
        templateUrl: "views/customize/index.html",
        controller: "CustomizeCtrl"
      }).otherwise({
        redirectTo: "/"
      });
    }
  ]);

  'use strict';

  angular.module('NgBootstrapDocs').controller('ComponentsCtrl', [
    '$scope', function($scope) {
      return console.i("#/components initialized");
    }
  ]);

  'use strict';

  angular.module('NgBootstrapDocs').controller('CSSCtrl', [
    '$scope', function($scope) {
      return console.i("#/css initialized");
    }
  ]);

  'use strict';

  angular.module('NgBootstrapDocs').controller('CustomizeCtrl', [
    '$scope', function($scope) {
      return console.i("#/customize initialized");
    }
  ]);

  'use strict';

  angular.module('NgBootstrapDocs').controller('GettingStartedCtrl', [
    '$scope', function($scope) {
      return console.i("#/getting-started initialized");
    }
  ]);

  'use strict';

  angular.module('NgBootstrapDocs').controller('HomeCtrl', [
    '$scope', function($scope) {
      return console.i("#/home initialized");
    }
  ]);

  'use strict';

  angular.module('NgBootstrapDocs').controller('FooterCtrl', [
    '$scope', function($scope) {
      return console.i("footer initialized");
    }
  ]);

  'use strict';

  angular.module('NgBootstrapDocs').controller('HeaderCtrl', [
    '$scope', function($scope) {
      return console.i("footer initialized");
    }
  ]);

  'use strict';

  angular.module('NgBootstrapDocs').controller('JavaScriptCtrl', [
    '$scope', function($scope) {
      return console.i("#/javascript initialized");
    }
  ]);

}).call(this);
