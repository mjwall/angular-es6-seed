import angular from 'angular'
import ngRoute from 'angular-route'
import { HomeController } from './home-controller'

export default angular
  .module('myApp.home', [ngRoute])
  .config($routeProvider => {
    $routeProvider.when('/home', {
      templateUrl: './home/home.html',
      controller: HomeController
    })
  })
