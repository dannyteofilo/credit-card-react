import React, { useState, useEffect } from "react";
import creditCardType from "credit-card-type";

export const CardMask = ({ card }) => {
  const [mask, setMask] = useState(null);

  useEffect(() => {
    setMask(setMaskNumber(card));
  }, [card]);

  const setMaskNumber = (cardNumber) => {
    const types = creditCardType(cardNumber);
    var card = types[0];
    if (card) {
      var offsets = [].concat(0, card.gaps, cardNumber.length);
      var components = [];

      for (var i = 0; offsets[i] < cardNumber.length; i++) {
        var start = offsets[i];
        var end = Math.min(offsets[i + 1], cardNumber.length);
        components.push(cardNumber.substring(start, end));
      }
      console.log(components.join(" "));
      return components.join(" ");
    }
    console.log(cardNumber);
    return cardNumber;
  };

  return <div className="mask">{mask ? mask : "#### #### #### ####"}</div>;
};
