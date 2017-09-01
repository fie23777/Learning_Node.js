const restful = require('node-restful')

const mongoose = restful.mongoose

const creditoSchema = new mongoose.Schema({
name: {type: String, required: true},
value: {type: Number, min: 0, required: true}
})

const debtoSchema = new mongoose.Schema({
  name:{type: String, required: true},
  value:{type:Number, min:0, required: true},
  status:{type:String, required: true, uppercase: true,
  enum:['PAGO', 'PENDENTE', 'AGENDADO']}
})

const billingCycleSchema = new mongoose.Schema({
  name:{type:String, required: true},
  month:{type:Number, min:1, max:12, required: true},
  year:{type:Number, min:1970, max:2100, required:true},
  credits:[creditoSchema],
  debits:[debtoSchema]
})

module.exports = restful.model('billingCycle', billingCycleSchema)
