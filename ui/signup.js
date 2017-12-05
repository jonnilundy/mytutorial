var weAuth = WeDeploy.auth('auth-albertwetutorial.wedeploy.io');

var form = document.querySelector('form');



function register(){
	weAuth
		.createUser({
			'name': form.username.value,
			'email': form.email.value,
			'password': form.password.value
		})
		.then(function(response){
			console.info("User: ", response);
            //alert("Registered successfully! "+response);
            //document.location.href = 'index.html';	
		})
		.catch(function(error){
			alert('Something wrong happened. Try again!');
		});
}

function getUser(userId){
	weAuth
		.getUser(userId)
		.then(function(user){
			console.log(user);
			console.info("USER: ",user);
		})
		.catch(function(user){

		});
}