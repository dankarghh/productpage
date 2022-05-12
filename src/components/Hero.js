function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__heading">What's the big to-do?</h1>
          <p>
            Big to-do is the ultimate organisational life hack app you always
            secretly knew you needed.
          </p>
          <p>
            Never forget to pay that bill, book that service, or miss that
            appointment ever again.
          </p>
          <button className="btn btn--primary">Sign up Now</button>
          {/* <img src="phone.png" /> */}
        </div>
        <div className="hero__img-container">
          <img className="hero__img" src="./phone.png" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
