angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	  console.log('DashCtrl');
})

.controller('LoginCtrl', function($scope, $state, $ionicModal, $timeout, $ionicSideMenuDelegate, Settings) {

  // TODO move function declaration to appCtrl
  $scope.getTimeStamp = function(){
    var newDate = new Date();
    var timeStamp = (newDate).toString().split(' ').splice(1,4).join('_')+ ":" + newDate.getMilliseconds()+', ';
    return timeStamp;   
  }

  $scope.logList  = ["log item 1. Nov_06_2014_23:52:02:986, pushNotificationChange().Push Notification Change [object Object]",
  "log item 2. Nov_06_2014_23:52:02:986, pushNotificationChange().Push Notification Change [object Object]"];
  
  $scope.logListCount = $scope.logList.length;

/*
    $scope.consoleLog('funcName', 'logMessage');
*/
  $scope.consoleLog = function(funcName, logMessage) {
    //$scope.getTimeStamp = function(){return timeStamp}
    var newDate = new Date();
    var timeStamp = (newDate).toString().split(' ').splice(1,4).join('_')+ ":" + newDate.getMilliseconds()+', ';
    var messageText = timeStamp+funcName+'().'+logMessage;

    $scope.logList.push(messageText);
    console.log('Item count: ' + $scope.logList.length);
    console.log(messageText);
  };

  // Additional, this controller support other side menu commands
  $scope.appTitle = "CTFB";
  $scope.leftMenuTitle = "Welcome User";
  $scope.rightMenuTitle = "User Tools";

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
    $state.go('tab.home');
    $scope.modal.hide();
  };

  // Triggered in the login modal to close it
  $scope.closeLoginRedirect = function() {
    console.log('closeLoginRedirect');
    $state.go('tab.home');
  };

  // Open the login modal
  $scope.logout = function() {
    $scope.modal.show();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login - username is: ', $scope.loginData.username);
    console.log('Doing login - password is: ', $scope.loginData.password);

    alert("Doing login...\nusername: <" + $scope.loginData.username +
    	   ">,\npassword: <" + $scope.loginData.password + ">")

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
         ">,  password: <" + $scope.loginData.password + ">");

    $state.go('tab.home');

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

  $scope.doRefreshLogList = function() {
    $scope.consoleLog('doRefreshLogList', 'entered');
    Settings.push({text: 'text-item', checked: false})
    $scope.logListCount = $scope.logList.length;
    $scope.$broadcast('scroll.refreshComplete');
    $scope.$apply();
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

.controller('DonationsCtrl', function($scope, Donations) {
  $scope.donations = Donations.all();
})

.controller('DonationDetailCtrl', function($scope, $stateParams, Donations) {
  $scope.donation = Donations.get($stateParams.donationId);
})

.controller('LoggingCtrl', function($scope, $stateParams, Donations) {
})

.controller('SettingsCtrl', function($scope, Settings) {

  var checked_true = { checked: true };
  var checked_false = { checked: false };

  //$scope.initMode.checked = $scope.settingsList[0].checked;
  $scope.settingsDefault = { checked: true };
  $scope.settingsList = Settings.all;

  $scope.settingsInit = function() {

    if ($scope.initMode.checked === true)
      $scope.settingsDefault = checked_true;
    else
      $scope.settingsDefault = checked_false; //{ checked: false };


    // initialize all the elements with the settingsList
    for (var i=0, listSize=$scope.settingsList.length; i<listSize; i++){

      $scope.settingsList[i].checked = true;
      //$scope.$scope.settingsList[i].text.checked = { checked: true };

      var messageText = i + '.' +$scope.settingsList[i].text
          + ' checked = <'+ $scope.settingsList[i].checked + '>';

      // defined in loginCtrl 
      $scope.consoleLog('settingsInit', messageText);

      // Determine how to access list of element names to apply settings
      // var text = $scope.settingsList[i].text;
      // var toggleElement = document.getElementById(text);
      // var checked = { checked: $scope.settingsList[i].checked };
      // toggleElement = checked;
      // $scope.consoleLog('settingsInit', 'Email Notification Change ' + $scope.emailNotificationDisplay);
      // $scope.consoleLog('settingsInit', 'Push Notification Change' + $scope.pushNotificationDisplay);
    }
  };

  $scope.settingsChange = function(actionName) {
    // find settings element for actionName
    for (var i=0, listSize=$scope.settingsList.length; i<listSize; i++){
      if ($scope.settingsList[i].text === actionName){
        $scope.consoleLog(actionName +' Change event: ', $scope.settingsList[i].checked);
        return;
      }
    }
    $scope.consoleLog('settingsChange', 'event handler - FAILED LOOKUP');
  };

  $scope.pushNotificationChange = function() {
    $scope.consoleLog('pushNotificationChange', 'Email Notification Change '+$scope.emailNotificationDisplay);
    $scope.consoleLog('pushNotificationChange', 'Push Notification Change '+$scope.pushNotificationDisplay);
  };
  
  $scope.initMode = $scope.settingsDefault;
  $scope.airplaneMode = $scope.settingsDefault;
  $scope.tabBarDisplay = $scope.settingsDefault;
  $scope.appHealth = $scope.settingsDefault;
  $scope.dataSync = $scope.settingsDefault;
  $scope.userArchive = $scope.settingsDefault;
  $scope.emailNotificationDisplay = $scope.settingsDefault;
  $scope.pushNotificationDisplay = $scope.settingsDefault;
  $scope.alertsDisplay = $scope.settingsDefault;
  $scope.newsSubscribeDisplay = $scope.settingsDefault;

  $scope.emailNotification = 'Subscribed';
  
})
;
