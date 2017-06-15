Template.Inmueble.onCreated(function(){
  this.editMode = new ReactiveVar(false);
});

Template.Inmueble.helpers({
  updateInmuebleId: function() {
    return this._id;
  },
  editMode:function(){
    return Template.instance().editMode.get();
  }
});

Template.Inmueble.events({
  'click .toggle-menu':function(){
    Meteor.call('toggleImuebleDisponible_Inmuebles',this._id,this.inMenu);
  },
  'click .fa-trash' : function(){
    Meteor.call('deleteInmueble',this._id);
  },
  'click .fa-pencil' : function(event, template){
    template.editMode.set(!template.editMode.get());
  }
});
