// spec.js
/*describe('Protractor Demo App', function() {
  it('should add one and two', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);

    element(by.id('gobutton')).click();

    expect(element(by.binding('latest')).getText()).
        toEqual('5'); // This is wrong!
  });
});*/

describe('This is first ptr test which', function() {
	it("should send email and verify Sent email", function() {

		browser.waitForAngularEnabled(false);
		//browser.get('/non-angular-login-page.html');

		browser.get('http://gmail.com/');
		element(by.name('identifier')).sendKeys('Retestd1@gmail.com');
		element(by.id('identifierNext')).click();
		browser.pause();
		element(by.name('password')).sendKeys('strongerpassword!');
		element(by.id('passwordNext')).click();
		browser.wait(element(by.css(".T-I")).isPresent())
  		browser.sleep(5000)
  		browser.get("https://mail.google.com/mail/#inbox?compose=new")
		//element(by.xpath('//*[@id=":46"]/div/div')).click();
		browser.sleep(5000)

		var number = Math.round((Math.random()*100))
		var RandomTitle = "Hello dear client # " + number

		element(by.name('to')).sendKeys('Retestd2@gmail.com')
		element(by.name('subjectbox')).sendKeys(RandomTitle)
		element(by.className('Am Al editable LW-avf')).sendKeys('You are the best!')
		
		browser.actions().keyDown(protractor.Key.CONTROL).sendKeys('\uE007').perform();
		//browser.sleep(5000)
		//window.open('https://mail.google.com/mail/#sent')
		browser.get("https://mail.google.com/mail/#sent")
		browser.sleep(5000)
		
		//this check if header equal to generated one, if so - verify if body is equal to template
		let headerList = element.all(by.css('.bog'))
		let list = element.all(by.css('.y2'))

		for(var i = 0; i < headerList.length; i ++) {
			if (headerList[i] == RandomTitle) {
				expect(headerList.get(i).getText()).toBe(RandomTitle)
				expect(list.get(i).getText()).toBe(' - You are the best!')
				break;
			}
		}
		
		//let headerList = element.all(by.css('.bog'))
		//let list = element.all(by.css('.y2'))
		//expect(list.get(1).getText()).toBe(' - You are the best!')
		//expect(headerList.get(1).getText()).toBe(RandomTitle)
		
		browser.close()

	})

	it('should check presence of email sent from account 1', function() {
			
		//var browser2 = browser.forkNewDriverInstance();
		//browser2.waitForAngularEnabled(false);		
		//browser2.get('http://gmail.com/');
		browser.restart()
		browser.waitForAngularEnabled(false);
		browser.get('http://gmail.com/')

		element(by.name('identifier')).sendKeys('Retestd2@gmail.com');
		element(by.id('identifierNext')).click();
		browser.pause();
		element(by.name('password')).sendKeys('strongerpassword!');
		element(by.id('passwordNext')).click();
		browser.wait(element(by.css(".T-I")).isPresent())

		let unreadedLetters = element.all(by.css('.zF'))
		let inboxHeaders = element.all(by.css('.bog'))
		let mailBody = element.all(by.css('.y2'))

		for(var e = 0; e < unreadedLetters.length; e++)
		if (unreadedLetters[e] == "test d" && inboxHeaders[e] == RandomTitle) {
			expect(mailBody.get(i).getText()).toBe(' - You are the best!')
			break;
		}
	})
})