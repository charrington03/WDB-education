import React from "react";

class Block extends React.Component {
  //ADD CODE HERE

  render() {
    const mystyle = {
      // ADD CODE HERE
      background: this.props.color,
    };

    return (
      <>
        <div
          class="blockers"
          style={
            // ADD CODE HERE
            mystyle
          }
        ></div>

        <div className="bottom">
          <div className="white"></div>
        </div>
      </>
    );
  }
}

export default Block;
