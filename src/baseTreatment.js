// BASE

class BaseTreatment {
  setNextTreatment(treatment) {
    this.nextTreatment = treatment
    
    return treatment
  }

  Treat(cardNumber) {
    if (this.nextTreatment) return this.nextTreatment.Treat(cardNumber)

    return cardNumber
  }
}

module.exports = { BaseTreatment }