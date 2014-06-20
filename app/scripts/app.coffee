'use strict'

angular.module("NgBootstrapDocs", ["Angustrap", "ngRoute"]).config(['$routeProvider', ($routeProvider) ->
    $routeProvider

    .when "/",
        templateUrl: "views/home.html"
        controller: "HomeCtrl"

    .when "/getting-started",
        templateUrl: "views/getting-started/index.html"
        controller: "GettingStartedCtrl"

    .when "/css",
        templateUrl: "views/css/index.html"
        controller: "CSSCtrl"

    .when "/components",
        templateUrl: "views/components/index.html"
        controller: "ComponentsCtrl"

    .when "/javascript",
        templateUrl: "views/javascript/index.html"
        controller: "JavaScriptCtrl"

    .when "/customize",
        templateUrl: "views/customize/index.html"
        controller: "CustomizeCtrl"

    .otherwise
            redirectTo: "/"
])