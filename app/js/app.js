$(document).ready(function() {
  $('.background-image').on('webkitAnimationEnd', function(e) {
    $(this).addClass('visible');
  });
});


var app = angular.module('myApp', ['ui.router', 'mgcrea.ngStrap']);
