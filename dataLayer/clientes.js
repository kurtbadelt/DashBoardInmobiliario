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
  alCorriente: {
    type: Boolean,
    label: "¿Cliente al corriente?",

    autoform:{
      type:'boolean-select',
      trueLabel:'Si',
      falseLabel:'No',
      firstOption:'(Seleccione una respuesta)'
    }
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
  },

  contacts: {
    type: Array,
    label:"Contactos",
    optional: true
  },
  'contacts.$': {
    type: Object
  },
  'contacts.$.Nombre': {
    type: String
  },
  'contacts.$.email': {
    type: String
  }
}, { tracker: Tracker });


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
