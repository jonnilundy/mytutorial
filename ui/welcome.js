var form = document.querySelector('form');

var weAuth = WeDeploy.auth('auth-albertwetutorial.wedeploy.io');
var weData =  WeDeploy.data('db-albertwetutorial.wedeploy.io');

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

function myUpdate(id, name){
    weData
        .update('tasks/'+id, {"name": name});
}

weData
    .limit(1)
    .orderBy('id', 'desc')
    .watch('tasks/')
    .on('changes', function(data) {
        console.info("DATA CHANGED: ", data);
        console.log(data);
    })
    .on('fail', function(error) {
        console.log(error);
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

function rand(){
    return Math.floor((Math.random() * 100) + 1);
}