// Reciver

const { BaseTreatment } = require("./baseTreatment");

class CardExists extends BaseTreatment {
  Treat(cardNumber) {
    if (cardNumber !== "555.555.555" ) return super.Treat(cardNumber)

    return "Cartão validado com sucesso"
  }
}