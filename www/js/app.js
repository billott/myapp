// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:
/*    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'FriendsCtrl'
        }
      }
    })
*/
    .state('tab.friends', {
      url: '/friends',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tab-friends.html',
          controller: 'FriendsCtrl'
        }
      }
    })

    .state('tab.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

    .state('tab.leads', {
      url: '/leads',
      views: {
        'tab-leads': {
          templateUrl: 'templates/tab-leads.html',
          controller: 'LeadsCtrl'
        }
      }
    })

    .state('tab.lead-detail', {
      url: '/lead/:leadId',
      views: {
        'tab-leads': {
          templateUrl: 'templates/lead-detail.html',
          controller: 'LeadDetailCtrl'
        }
      }
    })

    .state('tab.accounts', {
      url: '/accounts',
      views: {
        'tab-accounts': {
          templateUrl: 'templates/tab-accounts.html',
          controller: 'AccountsCtrl'
        }
      }
    })

    .state('tab.account-detail', {
      url: '/account/:accountId',
      views: {
        'tab-accounts': {
          templateUrl: 'templates/account-detail.html',
          controller: 'AccountDetailCtrl'
        }
      }
    })

    .state('tab.contacts', {
      url: '/contacts',
      views: {
        'tab-contacts': {
          templateUrl: 'templates/tab-contacts.html',
          controller: 'ContactsCtrl'
        }
      }
    })

    .state('tab.contact', {
      url: '/contact/:contactId',
      views: {
        'tab-contacts': {
          templateUrl: 'templates/contact-detail.html',
          controller: 'ContactDetailCtrl'
        }
      }
    })

    .state('tab.donations', {
      url: '/donations',
      views: {
        'tab-donations': {
          templateUrl: 'templates/tab-donations.html',
          controller: 'DonationsCtrl'
        }
      }
    })

    .state('tab.donation-item', {
      url: '/donation/:donationId',
      views: {
        'tab-donations': {
          templateUrl: 'templates/donation-item.html',
          controller: 'DonationDetailCtrl'
        }
      }
    })
    ;

  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/tab/friends');

});
