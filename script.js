var database = [
{
	username: "Marriott",
	password: "Navin"
	},
	{
	username: "Jenny",
	password: "123"
	},
	{
	username: "Navin",
	password: "2020"
	}
];


var newsFeed=[
{
	username:"genesis",
	timeline:"helloooo"
},
{
	username:"Navin",
	timeline:"Holaaaa"
},
{
	username:"jennifer",
	timeline:"teamooo"
}
];

function userValid ( username, password) {
	for ( var i=0; i < database.length; i++) {
		if (database[i].username === username &&
			database[i].password === password) { 
			return true;
		}
	}
	return false;
}

function singIn(username, password) {
	if ( userValid (username, password)) {
		console.log(newsFeed);
	} else {
		alert ("Sorry, wrong username and password!");
	}

}

var userNamePrompt = prompt ("Whats your username?");
var passwordPrompt = prompt ("Whats your password?");

singIn(userNamePrompt, passwordPrompt)
