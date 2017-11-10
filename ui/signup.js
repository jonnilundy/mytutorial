var weAuth = WeDeploy.auth('auth-albertwetutorial.wedeploy.io');

var form = document.querySelector('form');

form.addEventListener('submit', function(e){register()});

function register(){
	weAuth
		.createUser({
			'name': form.username.value,
			'email': form.email.value,
			'password': form.password.value
		})
		.then(function(response){
            alert('Registered!');
            document.location.href = 'index.html';	
		})
		.catch(function(error){
			alert('Something wrong happened. Try again!');
		});
}

