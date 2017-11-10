var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
	e.preventDefault();
// Insert save data method below
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