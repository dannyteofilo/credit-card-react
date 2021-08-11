import React, { useState, useEffect } from "react";
import creditCardType from "credit-card-type";

export const CardMask = ({ card, typeCard }) => {
  const [mask, setMask] = useState({ value: null, type: null });

  useEffect(() => {
    setMask(setMaskNumber(card));
  }, [card]);

  useEffect(() => {
    if (mask) {
      const { type } = mask;
      typeCard(type);
    }
  }, [mask]);

  const setMaskNumber = (cardNumber) => {
    const types = creditCardType(cardNumber);
    const card = types[0];
    if (card) {
      const offsets = [].concat(0, card.gaps, cardNumber.length);
      let components = [];

      for (let i = 0; offsets[i] < cardNumber.length; i++) {
        const start = offsets[i];
        const end = Math.min(offsets[i + 1], cardNumber.length);
        components.push(cardNumber.substring(start, end));
      }
      const type = { type: card.type, size: card.code.size };
      return { value: components.join(" "), type };
    }
    return cardNumber;
  };

  return (
    <div className="mask">
      {mask
        ? mask.value !== ""
          ? mask.value
          : "#### #### #### ####"
        : "#### #### #### ####"}
    </div>
  );
};
