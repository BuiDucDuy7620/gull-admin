import React from "react";
import SimpleCard from "@gull/components/cards/SimpleCard";
import RightArrowAccordion from "@gull/components/accordions/RightArrowAccordion";
import { Accordion } from "react-bootstrap";
import shorId from "shortid";

const IconlessAccordin = () => {
  return (
    <SimpleCard title="Without Icons">
      <Accordion>
        {[1, 2, 3].map((icon, index) => (
          <Accordion.Item
            key={icon}
            icon={icon}
            eventKey={shorId.generate()}
            className="ul-card__border-radius border-0 card"
          >
            <Accordion.Header>
              <h6 className="card-title mb-0 text-primary">
                Accordion asd Item #{icon}
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

export default IconlessAccordin;
