import "animate.css";

function Hero(props) {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__heading animate__animated animate__fadeInUp">
            What's the big to-do?
          </h1>

          <div className="animate__animated animate__fadeIn animate__delay-1s">
            <p>
              Big to-do is the ultimate organisational life hack app you always
              secretly knew you needed.
            </p>
            <p>
              Never forget to pay that bill, book that service, or miss that
              appointment ever again.
            </p>
            <button
              className="btn btn--primary"
              onClick={e => props.setLogin(true)}
            >
              Sign up Now
            </button>
          </div>
        </div>
        <div className="hero__img-container animate__animated animate__zoomIn ">
          <img alt="phone" className="hero__img" src="./phone.png" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
