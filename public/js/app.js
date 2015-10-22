'use strict';

var mysiteApp = angular.module('mysiteApp',[
  'ngRoute',
  'mysiteController',
  'mysiteService',
  'mySiteFilter'
  //'mysiteDirective',
]);
/*
mysiteApp.run( function($rootScope, $location, language) {
    // register listener to watch route changes
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
        language = next.params.lang;
        //console.log();
      })
    });
*
mysiteApp.run(['$rootScope','JsonLoader', function($rootScope,JsonLoader) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        if (next.params.lang=='ita') {
           console.log("italiani");
            $rootScope.siteText =  JsonLoader.get('/json/itasite.json');
             console.log($rootScope.siteText);
        }
        else {
          console.log("inglesei");
             $rootScope.siteText = JsonLoader.get('/json/engsite.json');
        }
  });
}]);
*/
mysiteApp.config (['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider){
    $routeProvider.
      when('/:lang/me', {
        templateUrl: 'html/me.html',
        controller: 'HomeCtrl',
        resolve: {
          me:function(APIService, $route){
            return APIService.me.get();
          },
          siteText:function(JsonLoader,$route){ // the text for the template site:english or italian
              if($route.current.params.lang =='ita'){
                return JsonLoader.get('/json/itasite.json');
              }
              else{
                 return JsonLoader.get('/json/engsite.json');
              }
          }
        }
      }).
      when('/:lang/curriculum',{
        templateUrl: 'html/curriculum.html',
        controller: 'CurriculumCtrl',
        resolve: {
          education:function(APIService, $route){
            return APIService.edu.query();
          },
          experience:function(APIService, $route){
            return APIService.exp.query();
          },
          skills : function(APIService, $route){
            return APIService.skill.query();
          },
          skillsCat : function(APIService, $route){
            return APIService.skillCat.query();
          },
          siteText:function(JsonLoader,$route){ // the text for the template site:english or italian
              if($route.current.params.lang =='ita'){
                return JsonLoader.get('/json/itasite.json');
              }
              else{
                 return JsonLoader.get('/json/engsite.json');
              }
          }
        }
      }).
      when('/:lang/projects',{
        templateUrl: 'html/projects.html',
        controller: 'ProjectsCtrl',
        resolve: {
          projects:function(APIService, $route){
            return APIService.pro.query();
          },
          projectsCat:function(APIService, $route){
            return APIService.proCat.query();
          }
        }
      })/*.
      when('/:lang/contacts',{
        templateUrl: 'html/projects',
        controller: 'ProjectCtrl',
        resolve: {
          projects:function(ProjectsService, $route){
            return ProjectsService.getProjects({language:$route.current.params.lang})
          }
        }
      })*/
      .otherwise({
        redirectTo: '/ita/me'
      });
      // configure html5 to get links working on jsfiddle
      $locationProvider.html5Mode(true);
  }]);
/*
angular.module('PersonalSite',[
  'ngRoute',
  'Controllers',
  'Services',
  'Directives'
  ])
.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'html/me',
    controller: 'HomeCtrl',
    resolve: {
      me:function(JsonLoader){
        return JsonLoader.get('json/me.json');
      }
    }
  })
  .when('/curriculum', {
    title: 'curriculum',
    templateUrl: 'html/curriculum',
    controller: 'CurriculumCtrl',
    resolve: {
      curriculum:function(JsonLoader){
        return JsonLoader.get('json/curriculum.json');
      },
      skills:function(JsonLoader){
        return JsonLoader.get('json/skills.json');
      }
    }
  })
  .when('/project',{
    title: 'project',
    templateUrl: 'html/projects',
    controller: 'ProjectCtrl',
    resolve: {
      projects:function(JsonLoader){
        return JsonLoader.get('json/projects.json');
      }
    }
  })
  .when('/contact',{
    title: 'contact',
    templateUrl: 'html/contact',
    controller: 'ContactCtrl',
    resolve: {}
  })
  .otherwise({
    redirectTo: '/'
  });
  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
}]);
*/
