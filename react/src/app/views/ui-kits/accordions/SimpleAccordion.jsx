import React from "react";
import {
  Card,
  Accordion,
  AccordionButton,
  AccordionCollapse,
  Button,
} from "react-bootstrap";
import SimpleCard from "@gull/components/cards/SimpleCard";

const SimpleAccordion = () => {
  return (
    <SimpleCard title="Accordion Group">
      <Accordion>
        {[1, 2, 3].map((item) => (
          <Accordion.Item
            as={Card.Header}
            eventKey={item}
            className="ul-card__border-radius border-0 p-0 card"
          >
            <Accordion.Header>
              <h6 className="card-title mb-0 text-primary">
                Accordion asd Item #{item}
              </h6>
            </Accordion.Header>
            <Accordion.Body>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch.
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </SimpleCard>
  );
};

export default SimpleAccordion;
