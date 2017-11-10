var list = document.querySelector('.list');

var weAuth = WeDeploy.auth('auth-albertwetutorial.wedeploy.io');

var save = document.querySelector('#savebtn');

var weData = WeDeploy.data('db-albertwetutorial.wedeploy.io');

WeDeploy
    .data('db-albertwetutorial.wedeploy.io')
    .orderBy('id', 'desc')
    .get('tasks')
    .then(function(response) {
        appendTasks(response);
    })
    .catch(function(error) {
        console.error(error);
    });


function appendTasks(tasks) {
	var taskList = '';
	tasks.forEach(function(task) {
		taskList += `<input type="text" class="tasklist" value="${task.name}">`;
        taskList += `<input type="hidden" class="tasklistid" value="${task.id}">`;
        console.info('ID: ', taskList);
	});
	list.innerHTML = taskList;
}


function myUpdate(id, name){
    weData
    .update('tasks/'+id, {"name": name})
    .then(function(task){
        console.info('Updated task: ', task);
        
    })
    .catch(function(error) {
        console.error(error);
    });
}

function myQuery(){
    weData
        .where('idade', '<', 40)
        .where('idade', '>', 10)
        .get('tasks')
        .then(function(response) {
            console.log('Filtro: ', response);
        })
        .catch(function(error) {
            console.error(error);
        });
}

save.addEventListener("click", function(e){

    var names = document.querySelectorAll('.tasklist');
    var ids = document.querySelectorAll('.tasklistid');

    for(var i = 0; i< names.length;i++){
        myUpdate(ids[i].value, names[i].value);
    }
    alert("All tasks were updated!");
}, false);