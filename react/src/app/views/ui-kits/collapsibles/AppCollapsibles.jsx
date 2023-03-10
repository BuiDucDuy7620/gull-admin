import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Accordion, Button, Card, useAccordionButton } from "react-bootstrap";
import SimpleCard from "@gull/components/cards/SimpleCard";
import RightArrowAccordion from "@gull/components/accordions/RightArrowAccordion";

class AppCollapsible extends Component {
  state = {};
  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "UI Kits", path: "/uikits" },
            { name: "Collapsibles" },
          ]}
        ></Breadcrumb>
        <div className="mb-3">
          <div className="row">
            <div className="col-lg-4 mb-5">
              <Accordion>
                <div className="card card-body py-3">
                  <div className="text-center">
                    <h5 className="heading text-primary">
                      Inline or block element
                    </h5>
                    <p className="mb-3 text-muted">
                      Example of inline text toggler
                    </p>
                    <CustomToggle
                      Tag={"span"}
                      eventKey={2}
                      className="t-font-boldest ul-cursor--pointer"
                    >
                      Toggle Context
                    </CustomToggle>
                  </div>
                  <Accordion.Collapse eventKey={2}>
                    <div className="mt-3">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch.
                    </div>
                  </Accordion.Collapse>
                </div>
              </Accordion>
            </div>

            <div className="col-lg-4 mb-5">
              <Accordion>
                <div className="card card-body py-3">
                  <div className="text-center">
                    <h5 className="heading text-primary">
                      Text and other links
                    </h5>
                    <p className="mb-3 text-muted">
                      Example of a simple <code>&lt;a&gt;</code> element
                    </p>
                    <CustomToggle
                      Tag={"a"}
                      eventKey={1}
                      className="font-weight-semibold collapsed typo_link text-primary t-font-boldest cursor-pointer"
                    >
                      Toggle Context
                    </CustomToggle>
                  </div>
                  <Accordion.Collapse eventKey={1}>
                    <div className="mt-3">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch.
                    </div>
                  </Accordion.Collapse>
                </div>
              </Accordion>
            </div>

            <div className="col-lg-4 mb-5">
              <Accordion>
                <div className="card card-body py-3">
                  <div className="text-center">
                    <h5 className="heading text-primary">
                      Single or multiple icons
                    </h5>
                    <p className="mb-3 text-muted">
                      Icons in block or inline elements
                    </p>

                    <CustomToggle
                      eventKey={2}
                      Tag={"span"}
                      className="text-default collapsed cursor-pointer"
                    >
                      <i className="i-Arrow-Down-2 t-font-boldest"></i>
                    </CustomToggle>
                  </div>
                  <Accordion.Collapse eventKey={2}>
                    <div className="mt-3">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch.
                    </div>
                  </Accordion.Collapse>
                </div>
              </Accordion>
            </div>

            <div className="col-lg-4 mb-5">
              <Accordion>
                <div className="card card-body py-3">
                  <div className="text-center">
                    <h5 className="heading text-primary">Button</h5>
                    <p className="mb-3 text-muted">
                      Icons in block or inline elements
                    </p>

                    <CustomToggle
                      eventKey={3}
                      Tag={"button"}
                      className="btn btn-primary collapsed cursor-pointer"
                    >
                      Toggle content
                    </CustomToggle>
                  </div>
                  <Accordion.Collapse eventKey={3}>
                    <div className="mt-3">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch.
                    </div>
                  </Accordion.Collapse>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function CustomToggle({ children, eventKey, Tag, className }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <Tag onClick={decoratedOnClick} className={className}>
      {children}
    </Tag>
  );
}

export default AppCollapsible;
