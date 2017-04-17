import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./app.css";

import angular from "angular";
import ngRoute from "angular-route";

import home from "./home/home";
import view1 from "./view1/view1";
import view2 from "./view2/view2";
import version from "./components/version/version";

var myApp = angular
  .module("myApp", [ngRoute, version.name, home.name, view1.name, view2.name])
  .config(($locationProvider, $routeProvider) => {
    $locationProvider.hashPrefix("!");
    $routeProvider.otherwise({
      redirectTo: "/home"
    });
  });

angular.element(document).ready(() => {
  angular.bootstrap(document.body, [myApp.name]);
});
