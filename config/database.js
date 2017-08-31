const mongoose = require("mongoose")

module.exports = mongoose.connect('mongodb://localhost/db_finance')

mongoose.Error.messages.general.required = "O atributo '{PATH} é obrigatótio.'"
mongosse.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite minimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongosse.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'"
