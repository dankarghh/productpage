import React from "react";

function Features() {
  return (
    <>
      <section className="features">
        <h2>Intuitive and Simple, for Maximum Productivity</h2>
        <div className="features__container">
          <div className="features__feature">
            <img alt="" className="features__img" src="./coming_up.png"></img>
            <h3>Simple one click navigation</h3>
          </div>
          <div className="features__feature">
            <img alt="" className="features__img" src="./menu.png"></img>
            <h3>Simple one click navigation</h3>
          </div>
        </div>
      </section>

      <div
        className="features"
        style={{ backgroundColor: "rgba(194, 207, 200, 0.425)" }}
      >
        <h2>Being on top of it never looked so good</h2>
        <div className="features__container">
          <div className="features__feature">
            <img alt="" className="features__img" src="./new-task.png"></img>
            <h3>Add new lists in an instant</h3>
          </div>
          <div className="features__feature">
            <img alt="" className="features__img" src="./all_tasks.png"></img>
            <h3>Easily view all upcoming tasks</h3>
          </div>
        </div>
      </div>
      <section className="features"></section>
    </>
  );
}

export default Features;
