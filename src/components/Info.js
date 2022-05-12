import React from "react";

function Info() {
  return (
    <section className="info">
      <div className="info__container">
        <div className="info__img-container">
          <img
            className="info__img"
            src="./laptop.png"
            alt="computer, laptop, phone"
          />
        </div>
        <div className="info__content">
          <h2>Life just got a whole lot simpler</h2>
          <p>
            Make plans seamlessly accross all devices. Whether you're on the
            move, at home, or at the office.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Info;
