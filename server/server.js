Meteor.methods({
  removeAll: function removeAll(){
    return {
      event: "BOOOM",
      value: Project.remove({}) + Tasks.remove({})
    };
  }
});