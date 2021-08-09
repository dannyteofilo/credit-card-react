import React, { useState } from "react";

export const CreditCard = () => {
  const [active, setActive] = useState(false);

  const handleFocus = () => {
    setActive(true);
  };

  const handleFocusOut = () => {
    setActive(false);
  };
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
                  src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
                  alt=""
                />
              </div>
              <div className="mask">#### #### #### ####</div>
              <div className="holder flex-row">
                <div className="flex-column">
                  <label className="holder-label">Card Holder</label>
                  <label className="holder-value">FULL NAME</label>
                </div>
                <div className="flex-column">
                  <label className="expire-label">Expires</label>
                  <label className="expire-value">MM/YY</label>
                </div>
              </div>
            </div>
          )}
          {active && (
            <div className="back">
              <div className="band"></div>
              <div className="cvv-band">
                <label className="label">CVV</label>
                <div className="cvv-value">123</div>
                <div className="type-card">
                  {" "}
                  <img
                    className="name"
                    src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
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
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label className="label-form">Card Name</label>
            <input type="text" className="form-control" />
          </div>

          <div className="row flex-row">
            <div className="form-group expiration">
              <label className="label-form">Expiration Date</label>
              <div className="row flex-row">
                <select name="month" className="form-control month"></select>
                <select name="year" className="form-control year"></select>
              </div>
            </div>
            <div className="form-group cvv">
              <label className="label-form">CVV</label>
              <input
                type="text"
                className="form-control"
                onFocus={handleFocus}
                onBlur={handleFocusOut}
              />
            </div>
          </div>
          <button type="submit" class="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
