import React, { useState, useEffect } from "react";
import creditCardType from "credit-card-type";

export const CardMask = ({ card, typeCard }) => {
  const [mask, setMask] = useState(null);

  useEffect(() => {
    setMask(setMaskNumber(card));
  }, [card]);

  const setMaskNumber = (cardNumber) => {
    const types = creditCardType(cardNumber);
    console.log(types);
    const card = types[0];
    if (card) {
      const offsets = [].concat(0, card.gaps, cardNumber.length);
      let components = [];

      for (let i = 0; offsets[i] < cardNumber.length; i++) {
        const start = offsets[i];
        const end = Math.min(offsets[i + 1], cardNumber.length);
        components.push(cardNumber.substring(start, end));
      }
      console.log(components.join(" "), card.type);
      typeCard({ type: card.type, size: card.code.size });
      return components.join(" ");
    }
    console.log(cardNumber);
    return cardNumber;
  };

  return <div className="mask">{mask ? mask : "#### #### #### ####"}</div>;
};
