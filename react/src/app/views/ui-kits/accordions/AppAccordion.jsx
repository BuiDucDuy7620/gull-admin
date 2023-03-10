import React, { useEffect, useRef } from "react";
import Breadcrumb from "@gull/components/Breadcrumb";
import SimpleAccordion from "./SimpleAccordion";
import { Row, Col } from "react-bootstrap";
import IconAccordin from "./IconAccordin";
import IconlessAccordin from "./IconlessAccordin";
import RightArrowLessAccordion from "./RightArrowLessAccordin";
import { useLocation, withRouter } from "react-router-dom";

const AppAccordion = () => {
  const location = useLocation();
  const prevLocation = useRef();
  useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      window.scrollTo(0, 0);
      prevLocation.current = location.pathname;
    }
  }, [location]);

  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "UI Kits", path: "/uikits" },
          { name: "Accordions" },
        ]}
      ></Breadcrumb>

      <Row className="mb-4">
        <Col lg={6} md={6}>
          <SimpleAccordion></SimpleAccordion>
        </Col>
        <Col lg={6} md={6}>
          <IconAccordin></IconAccordin>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6}>
          <IconlessAccordin></IconlessAccordin>
        </Col>
        <Col lg={6} md={6}>
          <RightArrowLessAccordion></RightArrowLessAccordion>
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(AppAccordion);
