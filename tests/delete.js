var login = function(driver)
{		
	driver
	.url(driver.globals.userNames.loginURL)
    .windowMaximize("current")
    .waitForElementVisible('body', 2000)
    .useXpath()
    .waitForElementVisible("//input[@id='login-email']")
    .click("//input[@id='login-email']")
    .setValue("//input[@id='login-email']",driver.globals.userNames.userEmail)
    .waitForElementVisible("//input[@id='login-password']")
    .click("//input[@id='login-password']")
    .setValue("//input[@id='login-password']",driver.globals.userNames.password)
    .waitForElementVisible("//button[@id='login_page_button']")
    .click("//button[@id='login_page_button']")

}

var findTalent = function(driver)
{
    var assert = require('assert');
   var isTextFound = false;
    driver
    .waitForElementVisible("//a[@id='home__Find Talent-button']")
    .verify.title('Home - Work Market')
    .click("//a[@id='home__Find Talent-button']")
    .verify.title('Find Workers - Work Market')
    .waitForElementVisible("//input[@id='input-text']")
    .clearValue("//input[@id='input-text']")
    .setValue("//input[@id='input-text']",driver.globals.userNames.searchTalentValue1)
    .keys(driver.Keys.ENTER)
    .waitForElementVisible("(//div[@class='profile-card--details'])[1]",5000)
    .verify.containsText("(//a[@class='profile-card--name open-user-profile-popup'])[2]",driver.globals.userNames.searchTalentValue1)
}




module.exports={

	login:login,
	findTalent: findTalent,
    'getElements': function (driver) {

    function getInfo(elements) {
      console.log('Number of results: ' + elements.value.length);

      elements.value.forEach(function (element,i) {
        driver.elementIdText(element.ELEMENT, function (res) {
            result = res.value
            if(result.includes(driver.globals.userNames.searchTalentValue1)||result.includes(driver.globals.userNames.searchTalentValue2))
                console.log("True, result "+(i+1)+" contains the search criteria '"+driver.globals.userNames.searchTalentValue1+"'")
            else
                
                console.log("False, result "+(i+1)+" contains the search criteria '"+driver.globals.userNames.searchTalentValue1+"'")
            //console.log('RESULT ' + element.ELEMENT + '\n', res.value);
            
        });
      });
    }


      //driver.elements('xpath', "//h2[@class='profile-card--header']", getInfo)
      driver.elements('xpath', "//div[@class='profile-card--details']", getInfo)
  }
}