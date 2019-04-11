import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <img src="img/straw.png" className="imgnav" alt />
          <li>
            <a href>Fruit</a>
          </li>
          <li>
            <a href>Apples</a>
          </li>
          <li>
            <a href>Bananas</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
