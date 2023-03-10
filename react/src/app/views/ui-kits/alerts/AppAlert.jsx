import React, { Component } from "react";
import SimpleAlert from "./SimpleAlert";
import SuccessAlert from "./SuccessAlert";
import DangerAlert from "./DangerAlert";
import { Breadcrumb } from "@gull";
import { withRouter } from "react-router-dom";

class AppAlert extends Component {
  componentDidMount = () => window.scrollTo(0, 0);
  componentDidUpdate = (prevProps) => {
    if (this.props.location !== prevProps.location) window.scrollTo(0, 0);
  };

  state = {};

  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "UI Kits", path: "/uikits" },
            { name: "Alerts" },
          ]}
        ></Breadcrumb>
        <div className="mb-4">
          <SimpleAlert></SimpleAlert>
        </div>

        <div className="mb-4">
          <h4 className="mb-3">Success Alert</h4>
          <SuccessAlert></SuccessAlert>
        </div>

        <div className="mb-4">
          <h4 className="mb-3">Danger Alert</h4>
          <DangerAlert></DangerAlert>
        </div>
      </div>
    );
  }
}

export default withRouter(AppAlert);
