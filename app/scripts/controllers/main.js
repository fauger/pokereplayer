'use strict';

/**
 * @ngdoc function
 * @name pokerReplayerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pokerReplayerApp
 */
angular.module('pokerReplayerApp')
  .controller('MainCtrl', function () {
  var stage = new createjs.Stage("demoCanvas");
  var pos = 0;
  addBitmap("images/poker-cards/ace_of_spades.jpg")
  addBitmap("images/poker-cards/jack_of_spades2.jpg")
  addBitmap("images/poker-cards/queen_of_spades2.jpg")


 function turn() {
 	addBitmap("7_of_hearts.jpg");

 }

  function river() {
 	addBitmap("5_of_hearts.jpg");
 }

 function addBitmap(path) {
var bitmap = new createjs.Bitmap(path);
bitmap.scaleX=0.2;
bitmap.scaleY=0.2;
bitmap.x=pos;
stage.addChild(bitmap);
bitmap.image.onload = function(){stage.update();}
pos = pos + 100;

 }


 


  });
