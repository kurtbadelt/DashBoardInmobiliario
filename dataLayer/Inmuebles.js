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
  precioDeCompra: {  
    type: Number,
    label: "Precio de Compra"
  },
  metrosCuadradosTerreno:{
    type: Number,
    label: "M2 Terreno",
    autoform: {
      type: 'number'
    }
  },
  metrosCuadradosConstruccion:{
    type: Number,
    label: "M2 Construcción",
    autoform: {
      type: 'number'
    }
  },
  precioDeRenta:{
    type: Number,
    label: "Precio de la renta"
  },
  fechaDePago:{
    type: Date,
    label: "Fecha de inicio de contrato"
  },
  tipoDePago:{
    type: Number,
    label: "Tipo de Pago",
    autoform: {
       type: 'select-radio',
       options: function (){return[{label:"Efectivo",value:1},{label:"Transferencia",value:2},{label:"Cheque",value:3},{label:"Deposito",value:4}]}
    }
  },
  disponible: {
    type: Boolean,
    label: "Inmueble disponible",

    autoform:{
      type:'boolean-select',
      trueLabel:'Disponible para renta',
      falseLabel:'No disponible',
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
