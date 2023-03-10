import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";
import SimpleCard from "@gull/components/cards/SimpleCard";

const popover = (props) => (
  <Popover id="popover-basic" {...props}>
    <Popover.Header as="h3">Popover right</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);

class AppPopover extends Component {
  state = {};
  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "UI Kits", path: "/uikits" },
            { name: "Popover" },
          ]}
        ></Breadcrumb>

        <div className="row">
          <div className="col-md-12">
            <SimpleCard title="example" className="mb-4">
              <OverlayTrigger
                trigger="click"
                placement="right"
                overlay={popover}
              >
                <Button className="text-white" variant="danger">
                  Click to toggle popover
                </Button>
              </OverlayTrigger>
            </SimpleCard>
          </div>

          <div className="col-md-12">
            <SimpleCard title="four directions" className="mb-4">
              <p>
                Four options are available: top, right, bottom, and left
                aligned.
              </p>

              {["top", "right", "bottom", "left", "auto"].map((dir) => (
                <OverlayTrigger
                  key={dir}
                  trigger="click"
                  placement={dir}
                  overlay={popover}
                >
                  <Button className="me-2">Popover on {dir}</Button>
                </OverlayTrigger>
              ))}
            </SimpleCard>
          </div>

          <div className="col-md-12">
            <SimpleCard title="hover with auto dismiss" className="mb-4">
              <OverlayTrigger
                trigger="hover"
                placement="right"
                overlay={popover}
                delay={{ show: 250, hide: 400 }}
              >
                <Button className="text-white" variant="danger">
                  Dismissible popover
                </Button>
              </OverlayTrigger>
            </SimpleCard>
          </div>
        </div>
      </div>
    );
  }
}

export default AppPopover;
