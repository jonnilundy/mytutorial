var weAuth = WeDeploy.auth('auth-albertwetutorial.wedeploy.io');

var form = document.querySelector('form');

function signIn(){
	weAuth
		.signInWithEmailAndPassword(form.user.value, form.password.value)
		.then(function(user){
			console.info('User: ', user);
			document.location.href = '/welcome.html';
		})
		.catch(function(error){
			console.error(error);
		});
}

function out(){
	weAuth
		.signOut()
		.then(function(){
			location.href = 'newindex.html';
		});
}