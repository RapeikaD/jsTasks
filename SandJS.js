describe("pow", function() {

			  it("возводит в n-ю степень", function() {
			    assert.equal(pow(2, 3), 8);
			  });
			  it("test2", function(){
			  	assert.equal(pow(4,2), 16);
			  });
			  it("test3", function(){
			  	assert.equal(pow(2,-2), "NaN");
			  });
			  it("test4", function(){
			  	assert.equal(pow(4,1.5), "NaN");
			  });
			  

			});
/*
var approval2 = confirm("Are you really sure?")
alert(approval2)


var approval2 = confirm("Are you really sure?")
alert(approval2)


var question = prompt('Information message here', '')
if (question!= null) {
		alert (question)
	}
else{
 	var approval = confirm("Are you sure?")
 	if (approval == true) {
		alert (question)
	}
		else {
		alert ("2nd case")
		}

 }
*/

