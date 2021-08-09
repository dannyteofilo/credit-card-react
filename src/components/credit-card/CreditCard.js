import React, { useState } from "react";
import { years, months } from "../../constants/constants";
import { CardMask } from "../card-mask/CardMask";
import { CardType } from "../../types/cards";

export const CreditCard = () => {
  console.log(CardType);
  const [active, setActive] = useState(false);
  const [data, setData] = useState({ month: "1", year: "1" });
  const [card, setType] = useState({ type: "visa", size: 3 });

  const handleFocus = () => {
    setActive(true);
  };

  const handleFocusOut = () => {
    setActive(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const dataForm = { ...data };
    dataForm[name] = value;
    setData(dataForm);
  };

  const handlegetTypeCard = (card) => {
    const { type, size } = card;
    const str = type.replace("-", "_");
    console.log("type: ", str);
    const cardInfo = { type: CardType[str].type, size };
    setType(cardInfo);
  };

  const { month, year, cardNumber, cvv, cardName } = data;
  const { type, size } = card;
  return (
    <div className="container">
      <div className="card">
        <div className={`card-item ${active ? "active" : ""}`}>
          {!active && (
            <div className="front flex-column">
              <div className="type">
                <img
                  className="chip"
                  src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                  alt=""
                />
                <img
                  className="name"
                  src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${type}.png`}
                  alt=""
                />
              </div>
              <CardMask
                card={cardNumber}
                typeCard={(event) => {
                  handlegetTypeCard(event);
                }}
              />
              <div className="holder flex-row">
                <div className="flex-column name">
                  <label className="holder-label">Card Holder</label>
                  <label className="holder-value">
                    {cardName ? cardName : "FULL NAME"}
                  </label>
                </div>
                <div className="flex-column">
                  <label className="expire-label">Expires</label>
                  <label className="expire-value">{month}/{year.substr(2,2)}</label>
                </div>
              </div>
            </div>
          )}
          {active && (
            <div className="back">
              <div className="band"></div>
              <div className="cvv-band">
                <label className="label">CVV</label>
                <div className="cvv-value">{cvv}</div>
                <div className="type-card">
                  {" "}
                  <img
                    className="name"
                    src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${type}.png`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <form className="form" autoComplete="off">
          <div className="form-group">
            <label className="label-form">Card Number</label>
            <input
              name="cardNumber"
              type="text"
              className="form-control"
              value={cardNumber}
              onChange={(event) =>
                event.target.value.length <= 16 ? handleChange(event) : null
              }
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
          </div>
          <div className="form-group">
            <label className="label-form">Card Name</label>
            <input
              type="text"
              name="cardName"
              value={cardName}
              className="form-control"
              onChange={(event) => handleChange(event)}
            />
          </div>

          <div className="row flex-row">
            <div className="form-group expiration">
              <label className="label-form">Expiration Date</label>
              <div className="row flex-row">
                <select
                  name="month"
                  value={month}
                  className="form-control month"
                  onChange={(event) => handleChange(event)}
                >
                  <option value="1" disabled>
                    Month
                  </option>
                  {months.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}
                </select>
                <select
                  name="year"
                  value={year}
                  className="form-control year"
                  onChange={(event) => handleChange(event)}
                >
                  <option value="1" disabled>
                    Year
                  </option>
                  {years.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group cvv">
              <label className="label-form">CVV</label>
              <input
                type="text"
                name="cvv"
                value={cvv}
                className="form-control"
                onFocus={handleFocus}
                onBlur={handleFocusOut}
                onChange={(event) =>
                  event.target.value.length <= size ? handleChange(event) : null
                }
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </div>
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
