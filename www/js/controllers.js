angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	  console.log("test");

})

.controller('FriendsCtrl', function($scope, Friends) {
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

