Inmuebles = new Mongo.Collection("inmuebles");

Inmuebles.allow({
  insert:function(userId,doc){
    return !!userId;
  },
  update:function(userId,doc){
    return !!userId;
  }

});

InmuebleSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Nombre"
  },
  description: {
    type: String,
    label: "Descipción"
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
  precioDeCompra: {  //must find a way to make it double
    type: String,
    label: "Precio de Compra"
  },
  metrosCuadradosTerreno:{
    type: String,
    label: "M2 Terreno"
  },
  metrosCuadradosConstruccion:{
    type: String,
    label: "M2 Construcción"
  },
  precioDeRenta:{
    type: String,
    label: "Precio de la renta"
  },
  fechaDePago:{
    type: Date,
    label: "Fecha de inicio de contrato"
  },
  tipoDePago:{
    type: String,
    label: "Tipo de Pago"
  },
  disponible: {
    type: Boolean,
    label: "Inmueble disponible",
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
  toggleActivoEnSistema_Inmuebles: function(id, currentState){
    Inmuebles.update(id,{
      $set:{
        activoEnSistema: !currentState
      }
    });
  },
  deleteInmueble: function(id){
    Inmuebles.remove(id);
  }
});

Inmuebles.attachSchema( InmuebleSchema);
