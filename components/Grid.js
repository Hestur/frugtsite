import React from "react";
import Nav from "./Nav";
import Content from "./Content";

class Grid extends React.Component {
  render() {
    return (
      <div id="gridlayout">
        <section id="nav">
          <Nav />
        </section>
        <Content />
      </div>
    );
  }
}

export default Grid;
