function task7(){
var entrantName = prompt ("Who is there?","Please,introduce yourself")
if (entrantName == "Админ")
{
	var askPassword = prompt ("Enter your password",)
	if (askPassword=="askme")
	 {
	 	alert ("Welcome!")
	 }
	 else if (askPassword==null)
	 {
	 	alert ("Log in attempt canceled")
	 }
	 else alert ("Password is Incorrect")
}
else if (entrantName == null)
{
	alert ("Log in attempt canceled")
}
else alert("I don`t know you, sorry.")
}