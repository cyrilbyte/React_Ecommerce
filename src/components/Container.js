import React from "react";

const Container = (props) => {
  return (
    <>
      <section className={props.class1}>
        <div className="conatiner-xxl">{props.children}</div>
      </section>
    </>
  );
};

export default Container;
