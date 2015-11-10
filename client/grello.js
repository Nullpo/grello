Template.navbar.helpers({
  "actualProject": function actualProject(){
    return User.getActualProject();
  },
  "projects": function listProject() {
    return Project.find({});
  },
  'isActualProject': function isActualProject(){
    return User.isActualProject(this)? "active":"";
  }
});

Template.navbar.events({
  'click li': function changeProject(){
    User.setActualProject(this);
  },
  'submit form': function newProject(evt, tpl){
    var input = tpl.$("input");
    var name = input.val();
    Project.insert(ProjectFactory(name));
    input.val("");
  }
});

Template.dashboard.helpers({
  'project': function(){
    return User.getActualProject();
  }
});

Template.column.helpers({
  'tasks': function () {
    return Tasks.find({
      column: this.name,
      project: User.getActualProject()._id
    });
  }
});

Template.column.events({
  'submit form': function(evt, tpl){
    var project = User.getActualProject();
    var text    = tpl.$("input[type=text]");
    Tasks.insert(TaskFactory(text.val(), this.name, project._id));
    text.val("");
    return false;
  }
});

Template.task.helpers({
  'canRemove':function(){
    return !Template.parentData(1).prev;
  },
  'canGoBack':function(){
    return Template.parentData(1).prev;
  },
  'canGoNext': function(){
    return Template.parentData(1).next;
  }
});

Template.task.events({
  'click button.btn-danger':function remove(){
    Tasks.remove({_id: this._id});
  },
  'click button.btn-warning':function goBack(){
    Tasks.update({_id: this._id}, {$set: { column: Template.parentData(1).prev} });
  },
  'click button.btn-success':function goNext(){
    Tasks.update({_id: this._id}, {$set:{column: Template.parentData(1).next} });
  }
})
