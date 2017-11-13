var weAuth = WeDeploy.auth('auth-albertwetutorial.wedeploy.io');

var form = document.querySelector('form');


form.addEventListener('submit', function(e) {
	e.preventDefault();
	signIn();
});


function signIn(){
	weAuth
		.signInWithEmailAndPassword(form.user.value, form.password.value)
		.then(function(user){
			console.info('User: ', user);
			document.location.href = '/welcome.html';
		})
		.catch(function(error){
			console.error(error);
			alert('Try again!');
		});
}

function out(){
	weAuth
		.signOut()
		.then(function(){
			location.href = 'newindex.html';
		});
}