Project = new Mongo.Collection('project');

Tasks = new Mongo.Collection('tasks');




/*, {
 transform: function projectModel(doc) {
 doc.getColumn = function getColumn(index){
 return doc.columns.filter(function(col){
 return col.pos === index;
 })[0];
 };

 doc.removeTask = function removeTask(col, task){
 for(var i = 0; i < col.tasks.length; i++){
 if(task._id === col.tasks[i]._id) {
 return col.tasks.splice(i, 1)[0];
 }
 }
 return;
 };

 return doc;
 }
 }*/