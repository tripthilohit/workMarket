var userNames = {
  registrationURL: 'https://dev.workmarket.com/register/campaign/10081C503B209A0C8E7F05FDCC1AA98D4C904DEEF5F73265CAE38C744E7EAD3E',
  loginURL: 'http://dev.workmarket.com/login',
userEmail: 'qa+candidatetest@workmarket.com',
  password: 'candidate123',
  searchTalentValue1: 'test',
  searchTalentValue2: 'Test',
  searchTalentValue3: 'TEST',
  firstName: 'first',
  lastName: 'last',
  validCompanyEmail: 'company11@yopmail.com',
  invalidCompanyEmail: 'companyEmail',
  existingCompanyEmail: 'company@yopmail.com',
  validPassword: 'General123$',
  invalidPassword: 'abcfg',
  companyName: 'WorkMarket',
  validIndividualEmail: 'individual7@yopmail.com',
  invalidIndividualEmail: 'individualEmail'
}

module.exports = {
  
  userNames: userNames,
  waitForConditionPollInterval: 500,

  // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
  // expect assertions
  waitForConditionTimeout : 5000,

  // this will cause waitFor commands on elements to throw an error if multiple
  // elements are found using the given locate strategy and selector
  throwOnMultipleElementsReturned: false,

  // controls the timeout value for async hooks. Expects the done() callback to be invoked within this time
  // or an error is thrown
  asyncHookTimeout : 10000,

  // controls the timeout value for when running async unit tests. Expects the done() callback to be invoked within this time
  // or an error is thrown
  unitTestsTimeout : 2000,

  // controls the timeout value for when executing the global async reporter. Expects the done() callback to be invoked within this time
  // or an error is thrown
  customReporterCallbackTimeout: 20000,

  // Automatically retrying failed assertions - You can tell Nightwatch to automatically retry failed assertions until a given timeout is reached, before the test runner gives up and fails the test.
  retryAssertionTimeout: 1000


};
