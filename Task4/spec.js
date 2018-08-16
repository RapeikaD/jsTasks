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

describe('This is first ptr test', function() {
	it("should send email", function() {

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
		element(by.xpath('//*[@id=":46"]/div/div')).click();
		browser.sleep(5000)

		var number = Math.round((Math.random()*10))
		var RandomTitle = "Hello dear client # " + number

		element(by.name('to')).sendKeys('Retestd2@gmail.com')
		element(by.name('subjectbox')).sendKeys(RandomTitle)
		element(by.className('Am Al editable LW-avf')).sendKeys('You are the best!')
		browser.sleep(5000)
		browser.actions().keyDown(protractor.Key.CONTROL).sendKeys('\uE007').perform();
		browser.sleep(5000)
		element(by.xpath('//*[@id=":4i"]/div/div[2]')).click()
			
		
		var body = element.all(by.tagName('span'))
		var bodyt = element(by.cssContainingText('.div', 'hey!'))

		expect (bodyt.getText()).toEqual('hey!')
		
		//element(by.xpath('//*[@id=":46"]/div/div')).click();
		//element(by.xpath('//*[@id=":46"]/div/div/text()')).click();
		//element(by.css('.T-I.J-J5-Ji.T-I-KE.L3')).click();
		//element(by.xpath('//*[@id=":46"]/div/div')).click();
		//element(by.cssContainingText('div', 'Compose')).click();
		//element(by.css(".T-I")).click();
		//element(by.className("T-I J-J5-Ji T-I-KE L3")).click();
		//element(by.PartialButtonText("Compose")).click();
		//element(by.buttonText("Compose")).click();
		//element(by.cssContainingText("Compose")).click();
		//mail = driver.findelement(by.linktext('Compose') 
		//element(by.text(mail)).click();

	})




})