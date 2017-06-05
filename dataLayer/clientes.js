Clientes = new Mongo.Collection("clientes");

Clientes.allow({
  insert:function(userId,doc){
    return !!userId;
  },
  update:function(userId,doc){
    return !!userId;
  }

});

ClienteSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Nombre/Razón Social"
  },
  taxID: {
    type: String,
    label: "RFC"
  },
  calle: {
    type: String,
    label: "Calle"
  },
  numeroExt: {
    type: String,
    label: "Número exterior"
  },
  numeroInt: {
    type: String,
    label: "Número interior"
  },
  municipio: {
    type: String,
    label: "Municipio/Delegación"
  },
  codigoPostal: {
    type: String,
    label: "Código Postal"
  },
  pais: {
    type: String,
    label: "Pais"
  },
  telefono: {
    type: String,
    label: "Telefono"
  },
  contactName:{
    type: String,
    label: "Nombre de Contacto"
  },
  email:{
    type: String,
    label: "eMail del Contacto"
  },
  alCorriente: {
    type: Boolean,
    label: "Al corriente en pagos",
    defaultValue: true,
    optional: false,
  },
  activoEnSistema: {
    type: Boolean,
    label: "Activo en sistema",
    defaultValue: true,
    optional: false,
    autoform: {
      type: "hidden"
    }
  },
  author:{
    type: String,
    label: "Autor",
    autoValue: function(){
      return this.userId
    },
    autoform:{
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Creado",
    autoValue: function(){
      return new Date()
    },
    autoform:{
      type: "hidden"
    }
  }

});


Meteor.methods({
  toggleActivoEnSistema_Clientes: function(id, currentState){
    Clientes.update(id,{
      $set:{
        activoEnSistema: !currentState
      }
    });
  },
  deleteCliente: function(id){
    Clientes.remove(id);
  }
});

Clientes.attachSchema( ClienteSchema);
