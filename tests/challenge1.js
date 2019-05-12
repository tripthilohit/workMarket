var reDirectToLoginScreen = function(driver)
{
// This module redirects to the registration page
	driver
	.url(driver.globals.userNames.registrationURL)
    .windowMaximize("current")
    .useXpath()
    .verify.title('Work Market')
}
var verifyLoginScreenElements = function(driver)
{
//This module verifies if the login screen contains all the elements and confirms if the 'Register' button is disabled
	driver
	.verify.elementPresent("//button/div/div/span[contains(text(),'Join as a company*')]")
	.verify.elementPresent("//button/div/div/span[contains(text(),'Join as an individual')]")
	.verify.elementPresent("//div[@data-attr-id='wm-company-page__title-columns']")
	.verify.elementPresent("//div/span[contains(text(),'Follow')]")
	//click and verify 'Join as a company' form elements
	.click("//button/div/div/span[contains(text(),'Join as a company*')]")
	.verify.visible("//div[@data-component-identifier='wm-heading__wrapper']/h3[contains(text(),'Sign Up for Work Market')]")
	.verify.elementPresent("//input[@id='firstname']")
	.verify.elementPresent("//input[@id='lastname']")
	.verify.elementPresent("//input[@id='email']")
	.verify.elementPresent("//input[@id='password']")
	.verify.elementPresent("//div[@name='industryId']")
	.verify.elementPresent("//input[@id='companyName']")
	.verify.elementPresent("//input[@type='checkbox']")
	.verify.elementPresent("//div/span[contains(text(),'Register')]")
	//verify if the 'Register' button is disabled
	.assert.attributeEquals("//button[@data-component-identifier='wm-validating-form__submit']","tabindex","-1")
	//click and verify 'Join as a company' form elements
	.click("//button/div/div/span[contains(text(),'Join as an individual')]")
	.verify.elementPresent("//input[@id='firstname']")
	.verify.elementPresent("//input[@id='lastname']")
	.verify.elementPresent("//input[@id='email']")
	.verify.elementPresent("//input[@id='password']")
	.verify.elementNotPresent("//div[@name='industryId']")
	.verify.elementNotPresent("//input[@id='companyName']")
	.verify.elementPresent("//input[@type='checkbox']")
	.verify.elementPresent("//div/span[contains(text(),'Register')]")
	//verify if the 'Register' button is disabled
	.verify.attributeEquals("//button[@data-component-identifier='wm-validating-form__submit']","tabindex","-1")
}

var verifyValidationsWithInvalidCredentials = function(driver)
{
//This module verifies validations for required fields (NEGATIVE test cases)
	driver
	//Verify validations for 'Join as a company' section
	.click("//button/div/div/span[contains(text(),'Join as a company*')]")
	.click("//input[@id='firstname']")
	.setValue("//input[@id='firstname']",driver.globals.userNames.firstName)
	.click("//input[@id='lastname']")
	.setValue("//input[@id='lastname']",driver.globals.userNames.lastName)
	.click("//input[@id='email']")
	.setValue("//input[@id='email']",driver.globals.userNames.invalidCompanyEmail)
	.click("//input[@id='password']")
	.setValue("//input[@id='password']",driver.globals.userNames.invalidPassword)
	.click("//input[@id='companyName']")
	.setValue("//input[@id='companyName']",driver.globals.userNames.companyName)
	.click("//div[@id='industryId']")
	.click("//div[contains(text(),'Technology and Communications')]")
	.click("//input[@type='checkbox']")
	//verify if the 'Register' button is still disabled
	.verify.attributeEquals("//button[@data-component-identifier='wm-validating-form__submit']","tabindex","-1")
	.verify.elementPresent("//div[contains(text(),'Please enter a valid company email')]") //check for email field validity
	.verify.elementPresent("//div[contains(text(),'Please enter a valid password')]") //check for password field validity
	//Verify validations for 'Join as an individual' section
	.click("//button/div/div/span[contains(text(),'Join as an individual')]")
	.waitForElementVisible("//input[@id='email']")
	.click("//input[@id='email']")
	.setValue("//input[@id='email']",driver.globals.userNames.invalidIndividualEmail)
	.click("//input[@id='password']")
	.setValue("//input[@id='password']",driver.globals.userNames.invalidPassword)
	//verify if the 'Register' button is still disabled
	.verify.attributeEquals("//button[@data-component-identifier='wm-validating-form__submit']","tabindex","-1")
	.verify.elementPresent("//div[contains(text(),'Please enter a valid company email')]") //check for email field validity
	.verify.elementPresent("//div[contains(text(),'Please enter a valid password')]") //check for password field validity

}


var verifyWithExisistingEmail = function(driver)
{
// This module verifies validation when an exisiting email is being used (NEGATIVE test case)
	driver
	.refresh()
	.click("//button/div/div/span[contains(text(),'Join as a company*')]")
	.click("//input[@id='firstname']")
	.setValue("//input[@id='firstname']",driver.globals.userNames.firstName)
	.click("//input[@id='lastname']")
	.setValue("//input[@id='lastname']",driver.globals.userNames.lastName)
	.click("//input[@id='email']")
	.setValue("//input[@id='email']",driver.globals.userNames.existingCompanyEmail)
	.click("//input[@id='password']")
	.setValue("//input[@id='password']",driver.globals.userNames.validPassword)
	.click("//input[@id='companyName']")
	.setValue("//input[@id='companyName']",driver.globals.userNames.companyName)
	.click("//div[@id='industryId']")
	.waitForElementVisible("//div[contains(text(),'Technology and Communications')]",5000)
	.click("//div[contains(text(),'Technology and Communications')]")
	.pause(3000)
	.click("//div/input[@type='checkbox']")
	.execute('scrollTo(100,100)')
	.waitForElementVisible("//button[@data-component-identifier='wm-validating-form__submit']")
	//verify if the 'Register' button is enabled
	.verify.attributeEquals("//button[@data-component-identifier='wm-validating-form__submit']","tabindex","0")
	.click("//button[@data-component-identifier='wm-validating-form__submit']")
	.verify.elementPresent("//div/p[contains(text(),'The email address you entered is already being used.')]") //check for exisiting email validation 

}

var verifyWithValidCredentialsCompany = function(driver)
{
//This module verifies company registration with valid credentials (POSITIVE test cases)
	driver
	//Verify validations for 'Join as a company' section
	.refresh()
	.click("//button/div/div/span[contains(text(),'Join as a company*')]")
	.click("//input[@id='firstname']")
	.setValue("//input[@id='firstname']",driver.globals.userNames.firstName)
	.click("//input[@id='lastname']")
	.setValue("//input[@id='lastname']",driver.globals.userNames.lastName)
	.click("//input[@id='email']")
	.setValue("//input[@id='email']",driver.globals.userNames.validCompanyEmail)
	.click("//input[@id='password']")
	.setValue("//input[@id='password']",driver.globals.userNames.validPassword)
	.click("//input[@id='companyName']")
	.setValue("//input[@id='companyName']",driver.globals.userNames.companyName)
	.click("//div[@id='industryId']")
	.waitForElementVisible("//div[contains(text(),'Technology and Communications')]",5000)
	.click("//div[contains(text(),'Technology and Communications')]")
	.pause(4000)
	.click("//input[@type='checkbox'][@value='on']")
	.execute('scrollTo(100,100)')
	.pause(1000)
	.waitForElementVisible("//button[@data-component-identifier='wm-validating-form__submit']")
	//verify if the 'Register' button is enabled
	.verify.attributeEquals("//button[@data-component-identifier='wm-validating-form__submit']","tabindex","0")
	.click("//button[@data-component-identifier='wm-validating-form__submit']")
	//confirm registration
	.verify.elementPresent("//body[@class='registration-landing']")

}

var verifyWithValidCredentialsIndividual = function(driver)
{
//This module verifies individual registration with valid credentials (POSITIVE test cases)
	driver
	//Verify validations for 'Join as a company' section
	.click("//button/div/div/span[contains(text(),'Join as an individual')]")
	.click("//input[@id='firstname']")
	.setValue("//input[@id='firstname']",driver.globals.userNames.firstName)
	.click("//input[@id='lastname']")
	.setValue("//input[@id='lastname']",driver.globals.userNames.lastName)
	.click("//input[@id='email']")
	.setValue("//input[@id='email']",driver.globals.userNames.validIndividualEmail)
	.click("//input[@id='password']")
	.setValue("//input[@id='password']",driver.globals.userNames.validPassword)
	.click("//input[@type='checkbox'][@value='on']")
	.waitForElementVisible("//button[@data-component-identifier='wm-validating-form__submit']")
	//verify if the 'Register' button is enabled
	.verify.attributeEquals("//button[@data-component-identifier='wm-validating-form__submit']","tabindex","0")
	.click("//button[@data-component-identifier='wm-validating-form__submit']")
	//confirm registration
	.verify.elementPresent("//body[@class='registration-landing']")
}

module.exports = {
reDirectToLoginScreen: reDirectToLoginScreen,
verifyLoginScreenElements: verifyLoginScreenElements,
verifyValidationsWithInvalidCredentials: verifyValidationsWithInvalidCredentials,
verifyWithExisistingEmail:verifyWithExisistingEmail,
verifyWithValidCredentialsCompany: verifyWithValidCredentialsCompany,
reDirectToLoginScreen2: reDirectToLoginScreen,
verifyWithValidCredentialsIndividual: verifyWithValidCredentialsIndividual
}