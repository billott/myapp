angular.module('starter.services', [])

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
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' },
    { id: 4, name: 'Bill Ott' }
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
;
