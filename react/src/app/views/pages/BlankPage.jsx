import React, { Component } from "react";
import { Breadcrumb } from "@gull";

class BlankPage extends Component {
  state = {
    openItem: "",
    questionList: [
      "Where can I buy Gull React from?",
      "Do I have right to use it in another template?",
      "What are the benefits that will be provided?",
      "How long shall I get support?",
    ],
  };

  setOpenItem = (name) => {
    if (name === this.state.openItem) {
      this.setState({ openItem: "" });
    } else this.setState({ openItem: name });
  };

  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Home", path: "/" },
            { name: "Pages", path: "/pages" },
            { name: "Blank Page" },
          ]}
        ></Breadcrumb>
      </div>
    );
  }
}

export default BlankPage;
