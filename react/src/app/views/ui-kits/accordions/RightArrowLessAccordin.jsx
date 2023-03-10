import React from "react";
import {
  Card,
  Accordion,
  AccordionButton,
  AccordionCollapse,
  Button,
} from "react-bootstrap";
import SimpleCard from "@gull/components/cards/SimpleCard";

const RightArrowLessAccordion = () => {
  const iconList = ["i-Big-Data", "i-Data-Settings", "i-Library"];

  return (
    <SimpleCard title="Without Right Arrow">
      <Accordion>
        <div className="card">
          {iconList.map((item, index) => (
            <Accordion.Item
              as={Card.Header}
              eventKey={item}
              className="ul-card__border-radius border-0 p-0 card"
            >
              <Accordion.Header>
                <div className="card-title mb-0 text-primary">
                  <i className={`${item} me-2 text-15`}></i>
                  Accordion asd Item #{index + 1}
                </div>
              </Accordion.Header>
              <Accordion.Body>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch.
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </div>
      </Accordion>
    </SimpleCard>
  );
};

export default RightArrowLessAccordion;
