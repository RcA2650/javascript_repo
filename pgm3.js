//Mask Credit Card Numbers

const maskCreditCardNumber = (cardNumber) => {
    const trimmedNumber = cardNumber.replaceAll(' ','');
    const lastDigits = trimmedNumber.slice(-4);
    return lastDigits.padStart(trimmedNumber.length, '*');
  }