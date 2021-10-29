// Reciver 2

const { BaseTreatment } = require("./baseTreatment");

class CardNotExists extends BaseTreatment {
  Treat(cardNumber) {
    return `número de cartão inválido (${ cardNumber })`
  }
}

module.exports = { CardNotExists }