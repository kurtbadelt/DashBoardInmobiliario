Accounts.onLogin(function(){
  FlowRouter.go('NewInmueble');
});

Accounts.onLogout(function(){
  FlowRouter.go('home');
});

FlowRouter.triggers.enter([function(context,redirect){
  if(!Meteor.userId()){
    FlowRouter.go('home');
  }
}]);

FlowRouter.route('/',{
    name:'home',
  action(){
    if(Meteor.userId()){
      FlowRouter.go('NewInmueble');
    }
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/NewInmueble',{
  name:'NewInmueble',
  action(){
    BlazeLayout.render('MainLayout',{main:'Inmuebles'});
  }
});

FlowRouter.route('/NewCustomer',{
  name:'NewCustomer',
  action(){
    BlazeLayout.render('MainLayout',{main:'NewCustomer'});
  }
});

FlowRouter.route('/Dashboard-show',{
  name:'Dashboard-show',
  action(){
    BlazeLayout.render('MainLayout',{main:'Dashboard-show'});
  }
});
