Template.Inmuebles.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('inmuebles')
  });
});

Template.Inmuebles.helpers({
  inmuebles: ()=> {
    return Inmuebles.find({});
  }
});

Template.Inmuebles.events({
  'click .inmueble-nuevo': ()=> {
    Session.set('inmuebleNuevo',true);
  }
});
