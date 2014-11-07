angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Settings', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var settings = [
    { text: "initMode", checked: true },
    { text: "airplaneMode", checked: false },
    { text: "tabBarDisplay", checked: false },
    { text: "appHealth", checked: false },
    { text: "dataSync", checked: false },
    { text: "userArchive", checked: false },
    { text: "emailNotificationDisplay", checked: false },
    { text: "pushNotificationDisplay", checked: false },
    { text: "alertsDisplay", checked: false },
    { text: "newsSubscribeDisplay", checked: false }
  ];

  return {
    all: function() {
      return settings;
    },
    get: function(textId) {
      // Simple index lookup
      return settings[textId];
    },
    push: function(logItem){
      settings.push(logItem);
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' },
    { id: 4, name: 'Bill Ott' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Leads', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var leads = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' },
    { id: 4, name: 'Bill Ott' }
  ];

  return {
    all: function() {
      return leads;
    },
    get: function(leadId) {
      // Simple index lookup
      return leads[leadId];
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Contacts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var contacts = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' },
    { id: 4, name: 'Bill Ott' }
  ];

  return {
    all: function() {
      return contacts;
    },
    get: function(contactId) {
      // Simple index lookup
      return contacts[contactId];
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Accounts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var accounts = [
    { id: 0, name: 'S. McGruff', details: "Wants shorter terms" },
    { id: 1, name: 'G.I. Joe', details: "Looking for military discounts" },
    { id: 2, name: 'Ms. Frizzle', details: "Asking for education discount" },
    { id: 3, name: 'A. Ketchum', details: "Likes sports" },
    { id: 4, name: 'B. Ott', details: "Does not care about price" }
  ];

  return {
    all: function() {
      return accounts;
    },
    get: function(accountId) {
      // Simple index lookup
      return accounts[accountId];
    }
  }
})


/**
 * A simple example service that returns some data.
 */
.factory('Donations', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var donations = [
    { id: 0, name: 'Scruff McGruff', item: 'scruffy items' },
    { id: 1, name: 'G.I. Joe', item: 'scruffy items' },
    { id: 2, name: 'Miss Frizzle', item: 'scruffy items' },
    { id: 3, name: 'Ash Ketchum', item: 'scruffy items' },
    { id: 4, name: 'Bill Ott', item: 'scruffy items' }
  ];

  return {
    all: function() {
      return donations;
    },
    get: function(donationId) {
      // Simple index lookup
      return donations[donationId];
    }
  }
})

// Git Hub Service (Svc)
// https://medium.com/@dickeyxxx/best-practices-for-building-angular-js-apps-266c1a4a6917
// Best Practices for Angular Development

.factory('GithubSvc', function ($http) {
  return {
    fetchStories: function () {
      //return $http.get('https://api.github.com/users')
      return $http.get('https://api.github.com/billott')
    }
  }
})

.controller('GithubCtrl', function ($scope, GithubSvc) {
  GithubSvc.fetchStories().success(function (users) {
    $scope.users = users
  })
})
;