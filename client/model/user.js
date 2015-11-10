Session.setDefault("project.actual", null);

User = {
  getActualProject: function () {
    return Project.findOne(Session.get("project.actual"));
  },
  setActualProject: function(value){
    Session.set("project.actual", value._id);
  },
  isActualProject: function(value){
    return Session.equals("project.actual", value._id)
  }
};

ProjectFactory = function (name) {
  return {
    name: name,
    columns: [{
      name: "Backlog",
      next: "In progress"
    },{
      prev: "Backlog",
      name: "In progress",
      next: "Done"
    },{
      prev: "In progress",
      name: "Done"
    }]
  };
};

TaskFactory = function(name, column, project){
  return {
    name: name,
    column: column,
    project: project
  };
}