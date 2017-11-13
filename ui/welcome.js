var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
	e.preventDefault();
// Insert save data method below
    WeDeploy
        .data('db-albertwetutorial.wedeploy.io')
<<<<<<< HEAD
        .create('tasks', {name: form.item.value, idade: 15, tempo: 13})
=======
        .create('tasks', {name: form.item.value, idade: rand()})
>>>>>>> e1812adfd804ddb5b74e08bb492ee3bdeb05ce66
        .then(function(response) {
            form.reset();
            form.item.focus();
            console.info('Saved:', response);
        })
        .catch(function(error) {
            console.error(error);
        });
// Insert save data method above
});

function generateUser(){
    for(var i = 0; i<20;i++){
        var r = rand();
        WeDeploy
            .data('db-albertwetutorial.wedeploy.io')
            .create('tasks', {name: 'Random '+r, idade: r});        
    }

}


function rand(){
    return Math.floor((Math.random() * 100) + 1);
}