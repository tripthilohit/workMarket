
/*globals
homeURL: 'https://www.compass.com/',
  compassEmail: 'compass9012@gmail.com',
  compassPassword: 'Takehome1234567890',
  nycSalesListURL: 'https://www.compass.com/search/sales/nyc',
  listingCount: 5
  */



var allLocation = []	//array to store all location values
var uniqueLocationIndex = [] //array to store all the indexes of top unique locations

var login = function(driver)		//This module logins to the application 
{
	driver
	.url(driver.globals.userNames.homeURL) //variables are pulled from global file
	.windowMaximize("current")
	.waitForElementVisible('body', 2000)
	.verify.title('Real Estate, Homes for Sale & Apartments for Rent | Compass')
	.useCss()
	.click("button[class='uc-corpNav-button uc-corpNav-menuItem textIntent-caption1 uc-corpNav-authBtn uc-corpNav-loginBtn']")
	.waitForElementVisible("input[name='email']",2000)
	.click("input[name='email']")
	.setValue("input[name='email']",driver.globals.userNames.compassEmail)  
	.click("input[name='password']")
	.setValue("input[name='password']",driver.globals.userNames.compassPassword) 
	.click("button[class='uc-authenticationForm-submit cx-solidBtn cx-solidBtn--brand']")
	.pause(1000)		//remove pause later
}

var getLocation = function(driver)						//This module pushes all the location (in descending order of price) into an array
{
	driver
	.url(driver.globals.userNames.nycSalesListURL) 
	.waitForElementVisible('body', 2000)
	.click("button[data-tn='lolMenu-button-tableView']")
	.click("button[data-tn='lolMenu-button-supportView-map']")
	.click("dt[title='Locations']")
	.useXpath()
	.click("(//div[@class='searchFilter-section-container ']/div)[3]/label[1]")
	.pause(2000)
	.click("(//div[@class='ag-header-cell ag-header-cell-sortable ag-header-cell--number']/div/span[4])[1]")
	.pause(1000)
	.click("(//div[@class='ag-header-cell ag-header-cell-sortable ag-header-cell--number']/div/span[2])[1]")
	.pause(2000)
	function searchCriteriaResults(elements) {
      console.log('Number of results: ' + elements.value.length);
     elements.value.forEach(function (element,i) {
   driver.elementIdText(element.ELEMENT, function (res) {
            allLocation[i] = res.value
 			
        });

      });
    }
    driver.elements('xpath', "//div[@colid='listing.location.neighborhood']", searchCriteriaResults)   
}

var getUniqueLocationIndex = function(driver)		//This module pushes index of the top most expensive listings with unique location into an array
{	

	var visited = []
	for(var i=0;i<allLocation.length;i++)
		visited[i]= false
	for(var i=1;i<allLocation.length;i++)
	{
		if(!visited[i])
		{
			for(var j=i+1;j<allLocation.length;j++)
			{
				if(allLocation[i]==allLocation[j])
				{	
					visited[j]=true	
				}
			}	
		}
		if(!visited[i])
			uniqueLocationIndex.push(i)
	}
}

var printURLonConsole = function(driver)			//This module prints the 'n' URL of the sales listing
{
	driver
	.useXpath()
	for(var i=0;i<driver.globals.userNames.listingCount;i++)
	{
		//console.log(uniqueLocationIndex[i])
		var k = uniqueLocationIndex[i]
		driver.click("(//div[@colid='listing.location.address'])["+(k+1)+"]")
		driver.pause(1000)
		driver.getAttribute("//a[@class='uc-listingNavigation-externalLink uc-listingNavigation-btn cx-nakedBtn cx-nakedBtn--sm']","href",function(url)
		{	console.log("\n")
			console.log(url.value)})
	}
}

module.exports = {
    login: login,
    getLocation: getLocation,
    getUniqueLocationIndex:getUniqueLocationIndex,
    printURLonConsole: printURLonConsole

}
