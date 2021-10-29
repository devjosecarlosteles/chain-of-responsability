const CardExists = require("./cardExists")
const CardNotExists = require("./cardNotExists")

class Card {
  Treat(cardNumber) {
    const treat = new CardExists(cardNumber)
      treat.setNextTreatment(new CardNotExists(cardNumber))

    return treat.Treat(cardNumber)
  }
}

module.exports = { Card }