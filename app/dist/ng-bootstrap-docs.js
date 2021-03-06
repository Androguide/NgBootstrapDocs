// Angustrap by Louis Teboul (a.k.a Androguide) | https://github.com/Androguide/Angustrap
(function(){angular.module("Angustrap",[]).service("AsRandom",[function(){return function(a){var b,c;for(c="";c.length<a&&a>0;)b=Math.random(),c+=.1>b?~~(100*b):String.fromCharCode(~~(26*b)+(b>.5?97:65));return c}}]).service("CleanUp",["$timeout",function(a){return function(b){return a(function(){var a;return b.asId?(a=$("#"+b.asId).attr("class"),$("#"+b.asId).attr("class",a.trim())):void 0},0)}}]).directive("dropdown",[function(){var a;return a={restrict:"E",replace:!0,transclude:!0,scope:{type:"@type",theme:"@theme",icon:"@icon",size:"@size",title:"@title",dropup:"=dropup",asClick:"=asClick"},template:'<div class="{{btnGroup}} {{directionClass}}">\n    <button type="button" class="btn btn-{{theme}} btn-{{size}}" data-toggle="{{dataToggle}}">\n        <glyph icon="{{icon}}"></glyph> {{title}}\n        <span class="caret" data-ng-hide="isSplit"></span>\n    </button>\n    <button type="button" class="btn btn-{{theme}} btn-{{size}} dropdown-toggle" data-toggle="dropdown" data-ng-show="isSplit">\n        <span class="caret"></span>\n        <span class="sr-only" style="position: relative"></span>\n    </button>\n    <ul class="dropdown-menu" role="menu" data-ng-transclude></ul>\n</div>',controller:["$scope","CleanUp",function(a,b){return a.directionClass=a.dropup?"dropup":"dropdown","split"===a.type?(a.isSplit=!0,a.dataToggle="",a.btnGroup="btn-group"):"btn"!==a.type&&a.type||(a.isSplit=!1,a.dataToggle="dropdown",a.btnGroup=""),b(a)}]}}]).directive("listDivider",[function(){var a;return a={restrict:"E",replace:!0,scope:{},template:'<li role="presentation" class="divider"></li>'}}]).directive("listItem",[function(){var a;return a={restrict:"E",replace:!0,transclude:!0,scope:{asHref:"@asHref"},template:'<li role="presentation">\n  <a role="menuitem" tabindex="-1" href="{{asHref}}" data-ng-transclude></a>\n</li>'}}]).directive("btnGlyph",[function(){var a;return a={restrict:"E",replace:!0,transclude:!0,scope:{icon:"@icon",theme:"@theme",size:"@size"},link:function(a,b,c){return c.theme=c.theme||"default"},template:'<button type="button" class="btn btn-{{theme}} btn-{{size}}">\n    <span class="glyphicon glyphicon-{{icon}}"></span>\n    <span data-ng-transclude></span>\n</button>'}}]).directive("glyph",[function(){var a;return a={restrict:"E",replace:!0,template:'<span class="glyphicon glyphicon-{{icon}}"></span>',scope:{icon:"@icon"}}}]).directive("inputGroup",[function(){return{restrict:"E",replace:!0,transclude:!0,scope:{asId:"@asId",asClass:"@asClass",title:"@title",asType:"@asType",side:"@side",icon:"@icon",size:"@size",theme:"@theme",type:"@type"},controller:["$scope","CleanUp",function(a,b){return b(a)}],template:'<div id="{{asId}}" class="input-group {{sizeWildcard}}{{size}} {{asClass}}">\n    <!-- Left Span Add-on -->\n    <span class="input-group-addon" data-ng-show="asType == \'span\' && side == \'left\'">\n        <glyph icon="{{icon}}" data-ng-show="icon"></glyph> {{title}}\n    </span>\n    <!-- Left Button Add-on -->\n    <span class="input-group-btn" data-ng-show="asType == \'btn\' && side == \'left\'">\n        <button class="btn btn-{{theme}}" type="button">\n            <glyph icon="{{icon}}" data-ng-show="icon"></glyph> {{title}}\n        </button>\n    </span>\n\n    <!-- The input -->\n    <input type="{{type}}" class="form-control" placeholder="{{placeholder}}">\n\n    <!-- Right Span Add-on -->\n    <span class="input-group-addon" data-ng-show="asType == \'span\' && side == \'right\'">\n        <glyph icon="{{icon}}" data-ng-show="icon"></glyph> {{title}}\n    </span>\n    <!-- Right Button Add-on -->\n    <span class="input-group-btn" data-ng-show="asType == \'btn\' && side == \'right\'">\n        <button class="btn btn-{{theme}}" type="button">\n            <glyph icon="{{icon}}" data-ng-show="icon"></glyph> {{title}}\n        </button>\n    </span>\n</div>'}}]).directive("navbarDropdown",[function(){return{restrict:"E",replace:!0,transclude:!0,scope:{title:"@title"},template:'<li class="dropdown">\n    <a href="#" class="dropdown-toggle" data-toggle="dropdown">{{title}} <b class="caret"></b></a>\n    <ul class="dropdown-menu" data-ng-transclude></ul>\n</li>'}}]).directive("navbarList",[function(){return{restrict:"E",replace:!0,transclude:!0,template:'<ul class="nav navbar-nav {{wildcard}}{{side}}" data-ng-transclude></ul>',scope:{side:"@side"},controller:["$scope","CleanUp",function(a,b){return a.wildcard=a.side?"navbar-":"",b(a)}]}}]).directive("navbar",["AsRandom",function(a){return{restrict:"E",replace:!0,transclude:!0,scope:{theme:"@theme",title:"@title",titleHref:"@titleHref",fixed:"@fixed",center:"=center"},template:'<nav class="navbar navbar-{{theme}} {{fixedWildcard}}{{fixed}}" role="navigation">\n    <div class="{{container}}">\n        <div class="navbar-header">\n            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="{{hashRandom}}">\n                <span class="sr-only">Toggle navigation</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>\n            <a class="navbar-brand" ng-href="{{titleHref}}">{{title}}</a>\n        </div>\n        <div class="collapse navbar-collapse" id="{{random}}">\n            <div class="{{center && \'container\' || \'\' }}" data-ng-transclude></div>\n        </div>\n    </div>\n</nav>',controller:["$scope","$timeout","CleanUp",function(b,c,d){return b.random="#"+a(12),b.hashRandom="#"+b.random,b.container="container",b.center||(b.container="container-fluid"),b.theme||(b.theme="default"),b.fixed&&(b.fixedWildcard="navbar-fixed-"),b.fixed&&"static"!==scope.fixed||(b.fixedWildcard="navbar-static-top"),d(b)}]}}])}).call(this);

// RainbowLog by Louis Teboul (a.k.a Androguide) | https://github.com/Androguide/RainbowLog
(function(){function r(t){return function(r,i){e.log("%c"+r,i+";color:#fff;background:"+n[1][t])}}var e=console,t=3,n=[["e","s","i"],["#c0392b","#2ecc71","#6f5499"]];while(t--)e[n[0][t]]=r(t)})();

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
