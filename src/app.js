var app=angular.module('myApp', ['ngSanitize', 'myApp.controllers',  'myApp.services', 'ui.router', 'ui.utils']);

app.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/en");

      $stateProvider
      	.state('en', {
            url: "/en",
            templateUrl: 'partials/lang-en.html', 
            controller:  ['$scope', 'EN', function($scope, EN) {
    			EN.getSpreadsheetEN(function(data) {
        			$scope.tableDataTabletop = data;
       				$scope.hdr = "Friends of the Palestine Red Crescent Society";
              $scope.faq = "Frequently Asked Questions"
    			     });
          }]
        })
      	.state('es', {
            url: "/es",
            templateUrl: 'partials/lang.html', 
            controller:  ['$scope', 'ES', function($scope, ES) {
    			ES.getSpreadsheetES(function(data) {
        			$scope.tableDataTabletop = data;
       				$scope.hdr = "Sociedad de Amigos de la Media Luna Roja Palestina";
              $scope.faq = "Preguntas"
               });
          }]
        })
        .state('al', {
            url: "/al",
            templateUrl: 'partials/lang.html', 
            controller:  ['$scope', 'AL', function($scope, AL) {
          AL.getSpreadsheetAL(function(data) {
              $scope.tableDataTabletop = data;
              $scope.hdr = "Miq të Shoqërisë Gjysmëhëna e Kuqe Palestineze";
              $scope.faq = "Pyetjet"
             });
          }]
        })
         .state('ar', {
            url: "/ar",
            templateUrl: 'partials/lang-ar.html', 
            controller:  ['$scope', 'AR', function($scope, AR) {
          AR.getSpreadsheetAR(function(data) {
              $scope.tableDataTabletop = data;
              $scope.faq = "اصدقاء الهلال الاحمر الفلسطيني";
              $scope.hdr = "الأسئلة"
              });
          }]
        })
        .state('bs', {
            url: "/bs",
            templateUrl: 'partials/lang.html', 
            controller:  ['$scope', 'BS', function($scope, BS) {
          BS.getSpreadsheetBS(function(data) {
              $scope.tableDataTabletop = data;
              $scope.hdr = "Prijatelji Društva Palestine Crveni Polumjesec";
              $scope.faq = "Cesto Postavljana Pitanja"
                         });
          }]
        })
         .state('de', {
            url: "/de",
            templateUrl: 'partials/lang.html', 
            controller:  ['$scope', 'DE', function($scope, DE) {
          DE.getSpreadsheetDE(function(data) {
              $scope.tableDataTabletop = data;
              $scope.hdr = "Freunde der Palästinensischen Gesellschaft";
              $scope.faq = "Fragen"
                         });
          }]
        })
         .state('fr', {
            url: "/fr",
            templateUrl: 'partials/lang.html', 
            controller:  ['$scope', 'FR', function($scope, FR) {
          FR.getSpreadsheetFR(function(data) {
              $scope.tableDataTabletop = data;
              $scope.hdr = "Amis du Croissant-Rouge Palestinien";
              $scope.faq = "Question"
                         });
          }]
        })
         .state('it', {
            url: "/it",
            templateUrl: 'partials/lang.html', 
            controller:  ['$scope', 'IT', function($scope, IT) {
          IT.getSpreadsheetIT(function(data) {
              $scope.tableDataTabletop = data;
              $scope.hdr = "Amici della Società della Mezzaluna Rossa Palestinese";
              $scope.faq = "Domande"
                         });
          }]
        })
         .state('pl', {
            url: "/pl",
            templateUrl: 'partials/lang.html', 
            controller:  ['$scope', 'PL', function($scope, PL) {
          PL.getSpreadsheetPL(function(data) {
              $scope.tableDataTabletop = data;
              $scope.hdr = "Towarzystwo Przyjaźni Palestyńskiego Czerwonego Półksiężyca";
              $scope.faq = "Pytania"
                         });
          }]
        })
         .state('ru', {
            url: "/ru",
            templateUrl: 'partials/lang-cy.html', 
            controller:  ['$scope', 'RU', function($scope, RU) {
              RU.getSpreadsheetRU(function(data) {
              $scope.tableDataTabletop = data;
              $scope.hdr = "Сообщество Палестинского общества Красного Полумесяца";
              $scope.faq = "вопросы"
                         });
          }]
        })
         .state('tr', {
            url: "/tr",
            templateUrl: 'partials/lang.html', 
            controller:  ['$scope', 'TR', function($scope, TR) {
              TR.getSpreadsheetTR(function(data) {
              $scope.tableDataTabletop = data;
              $scope.hdr = "Filistin Kizilayı dostalrı derneği";
              $scope.faq = "Sorular"
                         });
          }]
        })
         .state('ua', {
            url: "/ua",
            templateUrl: 'partials/lang-cy.html', 
            controller:  ['$scope', 'UA', function($scope, UA) {
          UA.getSpreadsheetUA(function(data) {
              $scope.tableDataTabletop = data;
              $scope.hdr = "Друзі Спілки Палестинського Червоного місяця";
              $scope.faq = "Запитання"
                         });
          }]
        })
        .state('zh', {
            url: "/zh",
            templateUrl: 'partials/lang-uni.html', 
            controller:  ['$scope', 'ZH', function($scope, ZH) {
          ZH.getSpreadsheetZH(function(data) {
              $scope.tableDataTabletop = data;
              $scope.hdr = "巴勒斯坦红新月会之友";
              $scope.faq = "问题"
                         });
          }]
        })
        .state('hi', {
            url: "/hi",
            templateUrl: 'partials/lang-uni.html', 
            controller:  ['$scope', 'HI', function($scope, HI) {
          HI.getSpreadsheetHI(function(data) {
              $scope.tableDataTabletop = data;
              $scope.hdr = "फ्रेंड्स ऑफ़ ढ पलेस्टाइन रेड क्रिसेंट सोसाइटी ";
              $scope.faq = "प्रश्न"
                         });
          }]
        })                                     
});
app.run(
      [ '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications. 
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
}]);
