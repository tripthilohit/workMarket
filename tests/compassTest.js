var allLocation = []
var uniqueLocation = []
var login = function(driver)
{
	driver
	.url("https://www.compass.com/") //add to global file
	.windowMaximize("current")
	.waitForElementVisible('body', 2000)
	.verify.title('Real Estate, Homes for Sale & Apartments for Rent | Compass')
	.useCss()
	.click("button[class='uc-corpNav-button uc-corpNav-menuItem textIntent-caption1 uc-corpNav-authBtn uc-corpNav-loginBtn']")
	.waitForElementVisible("input[name='email']",2000)
	.click("input[name='email']")
	.setValue("input[name='email']","compass9012@gmail.com")   //add to global file
	.click("input[name='password']")
	.setValue("input[name='password']","Takehome1234567890") //add to global file
	.click("button[class='uc-authenticationForm-submit cx-solidBtn cx-solidBtn--brand']")
	.pause(1000)		//remove pause later
}

var getLocation = function(driver)
{
	
	driver
	.url("https://www.compass.com/search/sales/nyc") //add to global file
	.waitForElementVisible('body', 2000)
	.verify.title('Compass Search')
	.click("button[data-tn='lolMenu-button-tableView']")
	.click("button[data-tn='lolMenu-button-supportView-map']")
	.click("dt[title='Locations']")
	//.waitForElementVisible("div[class='uc-searchBarLocations-neighborhood']",2000)
	.useXpath()
	.click("(//div[@class='searchFilter-section-container ']/div)[3]/label[1]")
	.pause(2000)
	.click("(//div[@class='ag-header-cell ag-header-cell-sortable ag-header-cell--number']/div/span[4])[1]")
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
var printLocation = function(driver)
{

	for(var i=0;i<allLocation.length;i++)
		console.log(allLocation[i])
}
var getUniqueLocationIndex = function(driver)
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
			
		}}
		if(!visited[i])
			uniqueLocation.push(i)
	}
console.log(uniqueLocation)
}

var returnURL = function(driver)
{

	driver
	.useXpath()
	for(var i=0;i<5;i++)
	{
		console.log(uniqueLocation[i])
		var k = uniqueLocation[i]
		driver.pause(2000)
	driver.click("(//div[@colid='listing.location.address'])["+(k+1)+"]")
	driver.pause(3000)
	//driver.waitForElementVisible("//a[@class='uc-listingNavigation-externalLink uc-listingNavigation-btn cx-nakedBtn cx-nakedBtn--sm']",3000)
	driver.getAttribute("//a[@class='uc-listingNavigation-externalLink uc-listingNavigation-btn cx-nakedBtn cx-nakedBtn--sm']","href",function(url)
	{console.log(url.value)})
}
}
//driver.elements('xpath', "//div[@class='ag-row ag-row-no-focus ag-row-no-animation ag-row-level-0 ag-row-even']", searchCriteriaResults)
////div[@colid='listing.location.neighborhood']
////div[@colid='listing.price.lastKnown']
module.exports = {
    login: login,
    getLocation: getLocation,
    printLocation:printLocation,
    getUniqueLocationIndex:getUniqueLocationIndex,
    returnURL: returnURL

}