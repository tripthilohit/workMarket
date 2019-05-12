# workMarket

<b> What is Nightwatch?</b>

Nightwatch is an automated testing framework for web applications and websites, written in Node.js and using the W3C WebDriver API (formerly Selenium WebDriver.

It is a complete browser (End-to-End) testing solution which aims to simplify the process of setting up Continuous Integration and writing automated tests. Nightwatch can also be used for writing Node.js unit tests.

# Install Nightwatch
From NPM:
```sh
$ npm install nightwatch
```
From GitHub:
```sh
$ git clone hhttps://github.com/tripthilohit/ww.git
$ cd ww
$ npm install
```
# Download WebDriver
Nightwatch uses a WebDriver compatible server to control the browser. WebDriver is a W3C specification and industry standard which provides a platform and HTTP protocol to interact with a browser.

Nightwatch includes support for automatically managing the following services:

ChromeDriver
for running tests against the Chrome browser;
download url: https://sites.google.com/a/chromium.org/chromedriver/downloads.
GeckoDriver
for running tests against the Mozilla Firefox browser;
download url: https://github.com/mozilla/geckodriver/releases.

# How to run tests?

1. Change the root path of the runner.js in nightwatch.js file (./ww/nightwatch.js)
In order to run the driver succesfully make sure you have changed runner.js root path in nightwatch.js file.

2. Change the user data (if required)in globals.js file (./ww/tests/globals.js)

3. Start a selenium server by opening a terminal and cd into the folder that contains the chrome driver (.ww/selenium)
  ```sh
  java -jar selenium.jar
  ```
4. Open a new terminal and cd to the root project folder (/.ww)
```sh
node nightwatch.js tests/test2.js
```

# Results of the tests

## Challenge 1

<img width="990" alt="Screen Shot 2019-05-12 at 3 45 01 PM" src="https://user-images.githubusercontent.com/38136831/57587061-f68b8580-74cc-11e9-933f-b7f8d2370e09.png">

## Challenge 2



