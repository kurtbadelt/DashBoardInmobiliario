Meteor.publish('inmuebles',function(){
  return Inmuebles.find({author: this.userId})
})

Meteor.publish('singleInmueble',function(id){
  check(id,String);
  return Inmuebles.find({_id:id});
})
