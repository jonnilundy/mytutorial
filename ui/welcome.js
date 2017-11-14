var form = document.querySelector('form');

var weAuth = WeDeploy.auth('auth-albertwetutorial.wedeploy.io');


form.addEventListener('submit', function(e) {
	e.preventDefault();
    WeDeploy
        .data('db-albertwetutorial.wedeploy.io')
        .create('tasks', {name: form.item.value, idade: rand()})
        .then(function(response) {
            form.reset();
            form.item.focus();
            console.info('Saved:', response);
        })
        .catch(function(error) {
            console.error(error);
        });
});

function out(){
    weAuth
        .signOut()
        .then(function(){
            location.href = 'index.html';
        });
}

function generateTasks(n){
    for(var i = 0; i<n;i++){
        var r = rand();
        WeDeploy
            .data('db-albertwetutorial.wedeploy.io')
            .create('tasks', {name: 'Random '+r, idade: r});        
    }
}


function rand(){
    return Math.floor((Math.random() * 100) + 1);
}