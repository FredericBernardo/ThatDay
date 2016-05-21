// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    //amMoment.changeLocale('fr');
  });
})


app.controller('TodayController', ['$scope', function ($scope) {
  var l_today = new Date();
  $scope.today=l_today;
//  console.log(l_today.moment().format("MMM Do YY"));
}]);


app.controller('TodayListController', ['$scope', function ($scope) {
  var l_today = new Date();
  
  var aDay=[];
  var midnight= new Date(l_today.getFullYear(), 
                         l_today.getMonth(),
                         l_today.getDate(),0,0,0,0);

//  console.log("tmp      :" + tmp);
  console.log("now      :" + l_today);
  console.log("midnight :" + midnight);

for (var h = 0; h < 24; h++) {
  for (var m = 0; m < 1; m++) { 
    var tmp = midnight;
    tmp.setHours(h);
    tmp.setMinutes(m);
    var pushh =new Date(tmp);
    aDay.push(pushh);
//  console.log("aDay long  :" + aDay.length);
//  console.log("aDay value :" + aDay[(h+1)*m]);
  }
} 

for (var i = aDay.length - 1; i >= 0; i--) {
  console.log(aDay[i].toString());
}

$scope.nb=aDay.length;
$scope.Day=aDay;

}]);


app.directive("oneMinute", function() {

  return {
  template : "<h1></h1><br><h1></h1>"
  };
});



