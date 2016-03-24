var app = angular.module('myApp', ['ui.router','ngSanitize','ncy-angular-breadcrumb']);


app.run([
  "$rootScope", "$state", "$stateParams", function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    return $rootScope.$stateParams = $stateParams;
  }
]);

app.config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider,$stateProvider){
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('home',{
            url:'/',
            templateUrl:'app/templates/home.html',        
            controller: 'homeCtrl',
            ncyBreadcrumb: {
              label: 'Home'
            }
        })
        .state('about',{
            url:'/about',
            templateUrl:'app/templates/about.html',
            controller: 'aboutCtrl',
            ncyBreadcrumb: {
              label: 'About Malton Coachworks',
                parent: 'home'
            }
        })
        .state('contact',{
            url:'/contact',
            templateUrl:'app/templates/contact.html',
            controller: 'contactCtrl',
            ncyBreadcrumb: {
              label: 'Contact Us',
                parent: 'about'
            }
        })
        .state('restoration',{
            url:'/restoration',
            templateUrl:'app/templates/restoration.html',
            ncyBreadcrumb: {
              label: 'Restoration',
                parent: 'home'
            }
        })
        .state('portfolio',{
            url:'/portfolio',
            templateUrl:'app/templates/portfolio.html',
            controller: 'portfolioListCtrl',
            ncyBreadcrumb: {
              label: 'Portfolio',
                parent: 'home'
            }            
        })
        
        .state('product', {
                url: '/:list/:name/:id',
                templateUrl: "app/templates/item.html",
                controller: 'itemDetailsCtrl',
                ncyBreadcrumb: {
                  label: '{{ itemName }}',
                parent: 'portfolio'
                    
                }

            })
        .state('staff',{
            url:'/staff',
            templateUrl:'app/templates/staff.html',
            controller: 'staffListCtrl',
            ncyBreadcrumb: {
                label: 'Meet the Staff',
                parent: 'about'
            }
        })
        
        .state('contact-product', {
            url: "/portfolio/:name/:id/contact",
            templateUrl: "app/templates/contact.html",
            controller: 'contactCtrl',
            ncyBreadcrumb: {
              label: 'Enquiry',
              parent: 'product'
            }
        })
    
    //$locationProvider.html5Mode(true);
    
}]);

 

app.factory('myFactory', function(){   
    var data = [];   
    data['str_company_name'] = 'Malton Coachworks';
    data['str_company_strapline'] = 'Accident Repair | Classic Car Restoration';
    data['str_company_message'] = '<p>Malton Coachworks is a wholly-owned subsidiary of <a href="/">Classic & Sportscar Ltd</a>. Established in 1991, the Company has earned a national reputation as purveyors of high quality Classic, Vintage, and Collector\'s cars.</p><p>Malton Coachworks extends our service to our valued existing and new customers by providing a high-quality vehicle body repair and refinishing facility, with dedicated modern and classic car expertise.</p>';
    data['str_company_address'] = 'Showfield Lane Industrial Estate, Malton, North Yorkshire';
    data['str_company_postcode'] = 'YO17 6BT';
    data['str_company_country'] = 'UK';
    data['str_company_telephone'] = '01653 692090';
    data['str_company_email'] = 'sales@maltoncoachworks.co.uk';
    data['str_company_web'] = 'www.maltoncoachworks.co.uk';
    
    data['meta_title'] = data['str_company_name'];
    data['meta_description'] = data['str_company_message'];
    data['meta_keywords'] = "malton coachworks, classic car restoration, accident repair, scratch repair, yorkshire";
    data['meta_author'] = "amactive.net &copy;2016";

	data['imgDir'] = 'app/img-cms/';
	data['imgDirThumb'] = 'app/img-cms/thumbs/';
	data['imgDirLarge'] = 'app/img-cms/large/';
    
    data['imgDir-csc'] = 'app/img-cms-csc/';
	data['imgDirThumb-csc'] = 'app/img-cms-csc/thumbs/';
	data['imgDirLarge-csc'] = 'app/img-cms-csc/large/';
    
    return {
        data: data
    };
    
});

