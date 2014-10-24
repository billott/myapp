angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	  console.log('test');
})

.controller('LoginCtrl', function($scope, $state, $ionicModal, 
	$timeout, $ionicSideMenuDelegate) {
  // Additional, this controller support other side menu commands

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Triggered in the login modal to close it
  $scope.closeLoginRedirect = function() {
    console.log('closeLoginRedirect');
    $state.go('tab.friends');
  };

  // Open the login modal
  $scope.logout = function() {
    //$state.go('tab.friends');
    $state.go('tab.login');
    $scope.modal.show();
  };

  // Open the login modal
  $scope.login = function() {
    $state.go('tab.login');
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login - username is: ', $scope.loginData.username);
    console.log('Doing login - password is: ', $scope.loginData.password);

    alert("Doing login - username: <" + $scope.loginData.username +
    	   ">,  password: <" + $scope.loginData.password + ">")

    $scope.closeLogin();

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    // $timeout(function() {
    //   $scope.closeLogin();
    // }, 1000);
  };

  // Perform the login action when the user submits the login form
  $scope.doLoginRedirect = function() {
    console.log('doLoginRedirect - username is: ', $scope.loginData.username);
    console.log('doLoginRedirect - password is: ', $scope.loginData.password);

    alert("doLoginRedirect - username: <" + $scope.loginData.username +
         ">,  password: <" + $scope.loginData.password + ">")

    $state.go('tab.friends');

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    // $timeout(function() {
    //   $scope.closeLogin();
    // }, 1000);
  };

  $scope.showLeftMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };

  $scope.showRightMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  };

})

.controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.showLeftMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.showRightMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  };
})

.controller('FriendsCtrl', function($scope, $ionicSideMenuDelegate, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('LeadsCtrl', function($scope, Leads) {
  $scope.leads = Leads.all();
})

.controller('LeadDetailCtrl', function($scope, $stateParams, Leads) {
  $scope.lead = Leads.get($stateParams.leadId);
})

.controller('ContactsCtrl', function($scope, Contacts) {
  $scope.contacts = Contacts.all();
})

.controller('ContactDetailCtrl', function($scope, $stateParams, Contacts) {
  $scope.contact = Contacts.get($stateParams.contactId);
})

.controller('AccountsCtrl', function($scope, Accounts) {
  $scope.accounts = Accounts.all();
})

.controller('AccountDetailCtrl', function($scope, $stateParams, Accounts) {
  $scope.account = Accounts.get($stateParams.accountId);
})

.controller('DonationsCtrl', function($scope,Donations) {
  $scope.donations = Donations.all();
})

.controller('DonationDetailCtrl', function($scope, $stateParams, Donations) {
  $scope.donation = Donations.get($stateParams.donationId);
})
;

